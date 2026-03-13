import type { Context } from "hono";
import type { Role } from "../../generated/prisma/index.js";
import { AuthService } from "./auth.service.js";
import { generateTokens, refreshSession, resetSession } from "../../helpers/tokenService.js";
import { LoginSchema, RegisterSchema, RegisterStudentSchema, ResetPasswordSchema, VerifyBeforeResetPasswordSchema } from "./auth.validation.js";
import { StudentService } from "../student/student.service.js";
import { AbsencesService } from "../absence/absences.service.js";
import BaseController from "../../base/controller.base.js";
import bcrypt from "bcryptjs";

class AuthController extends BaseController {
  constructor() {
    super();
  }

  Login = async (c: Context) => {
    try {
      const json = await c.req.json();
      const body = LoginSchema.safeParse(json);
      if (!body.success) return this.badRequest(c, body.error.message);

      const { email, password } = body.data;

      const User = await AuthService.FindCredentialByEmail(email);
      if (!User) return this.badRequest(c, "Invalid email or password");

      const Password = await bcrypt.compare(password, User.password);
      if (!Password) return this.badRequest(c, "Invalid email or password");

      const { accessToken, refreshToken } = await generateTokens({
        id: User.id,
        role: User.role,
        studentId: User.student?.id,
      });

      return this.ok(c, "Successfully login.", { accessToken, refreshToken });
    } catch (error) {
      return this.badRequest(c, `Failed to login. ${error}`);
    }
  };

  Register = async (c: Context) => {
    try {
      const json = await c.req.json();
      const body = RegisterSchema.safeParse(json);
      if (!body.success) return this.badRequest(c, body.error.message);

      const { name, email, password, slug, isAdmin } = body.data;

      const User = await AuthService.FindCredentialByEmail(email);
      if (User) return this.conflict(c, "Email already exist.");
      const Password = await bcrypt.hash(password, 12);

      const res = await AuthService.Register({
        name,
        email,
        password: Password,
        isAdmin,
        slug,
      });

      return this.ok(c, "Successfully register.", res);
    } catch (error) {
      return this.badRequest(c, `Failed to register. ${error}`);
    }
  };

  RegisterManyStudent = async (c: Context) => {
    try {
      const json = await c.req.json();
      const b = RegisterStudentSchema.safeParse(json);
      if (!b.success) return this.conflict(c, b.error.issues[0].message);

      const usersData = await Promise.all(
        b.data.map(async (u) => ({
          name: u.name,
          email: u.email,
          password: await bcrypt.hash(u.password, 10),
          slug: u.slug,
        })),
      );

      const users = await AuthService.RegisterMany(usersData);

      const studentData = await Promise.all(
        users.userIds.map(async (s, i) => ({
          user_id: s.id,
          class_id: b.data[i].classId,
          nis: b.data[i].nis,
        })),
      );

      const students = await StudentService.CreateManyStudent(studentData);
      const absences = await AbsencesService.CreateManyInitialAbsences(
        students.userIds.map((uId) => uId.id),
      );

      return this.ok(c, `Successfully registered accounts.`, {
        users: `${users.count} accounts created from ${b.data.length}`,
        student: `${students.count} students created from ${b.data.length}`,
        absence: `${absences.count} absences created from ${b.data.length}`,
      });
    } catch (error) {
      return this.badRequest(c, `Failed to register. ${error}`);
    }
  };

  Refresh = async (c: Context) => {
    try {
      var token = c.req.header("X-Refresh-Token");
      if (!token) return this.unauthorized(c);
      const { accessToken, refreshToken } = await refreshSession(token);
      return this.ok(c, "Successfully refresh.", { accessToken, refreshToken });
    } catch (error) {
      return this.badRequest(c, `Failed to refresh. ${error}`);
    }
  };

  Logout = async (c: Context) => {
    try {
      return this.noContent(c);
    } catch (error) {
      return this.badRequest(c, `Failed to logout. ${error}`);
    }
  };

  VerifyBeforeResetPassword = async (c: Context) => {
    try {
      const id: string = c.get("jwtPayloadId");
      const role: Role = c.get("jwtPayloadRole");

      const json = await c.req.json();
      const b = VerifyBeforeResetPasswordSchema.safeParse(json);
      if (!b.success) return this.conflict(c, b.error.issues[0].message);
      const { oldPassword } = b.data;

      const usr = await AuthService.VerifyUserForReset(id);
      if (!usr) return this.badRequest(c, "Invalid action.");
      const isMatch = await bcrypt.compare(oldPassword, usr.password);
      if (!isMatch) return this.badRequest(c, "Invalid password.");

      const tempToken = (await generateTokens({ id, role })).tempToken;

      c.header("x-reset-token", tempToken);
      return this.ok(c, "Granted access to reset password.");
    } catch (error) {
      return this.badRequest(c, `Failed to request change password. ${error}`);
    }
  };

  ResetPassword = async (c: Context) => {
    try {
      const token = c.req.header("x-reset-token");
      const json = await c.req.json();
      const b = ResetPasswordSchema.safeParse(json);
      if (!b.success) return this.conflict(c, b.error.issues[0].message);
      const { newPassword } = b.data;
      if (!token)
        return this.unauthorized(
          c,
          "Use change password or forget password first!",
        );

      const isVerify = await resetSession(token);
      if (!isVerify.id) return this.unauthorized(c, "Reset session end!");

      const pss = await bcrypt.hash(newPassword, 12);
      await AuthService.UpdateUserPassword(isVerify.id, {
        password: pss,
      });
      return this.ok(c, "Successfuly change password.");
    } catch (error) {
      return this.badRequest(c, `Failed to reset password. ${error}`);
    }
  };
}

export default AuthController;
