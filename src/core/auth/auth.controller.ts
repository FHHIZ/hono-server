import type { Context, Next } from "hono";
import BaseController from "../../base/controller.base.js";
import { AuthService } from "./auth.service.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  refreshSession,
  resetSession,
} from "../../helpers/tokenService.js";
import { getRefreshCookie } from "../../helpers/cookiesHelper.js";
import type { LoginType, RegisterType } from "../../type/type.js";
import type { Role } from "../../generated/prisma/index.js";
import { roleLevel } from "../../helpers/roleGuard.js";

class AuthController extends BaseController {
  constructor() {
    super();
  }

  Login = async (c: Context) => {
    try {
      const body = await c.req.json<LoginType>();
      const { email, password } = body;

      if (!email || !password)
        return this.badRequest(c, "Please insert email and password");

      const usr = await AuthService.FindCredentialByEmail(email);
      if (!usr) return this.badRequest(c, "Invalid email or password");

      const pss = await bcrypt.compare(password, usr.password);
      if (!pss) return this.badRequest(c, "Invalid email or password");

      const { accessToken, refreshToken } = await generateTokens({
        id: usr.id,
        role: usr.role,
        studentId: usr.student?.id,
      });

      return this.ok(c, "Successfully login.", { accessToken, refreshToken });
    } catch (error) {
      return this.badRequest(c, `Failed to login. ${error}`);
    }
  };

  Register = async (c: Context) => {
    try {
      const body = await c.req.json<RegisterType>();
      const userRole = c.get("jwtPayloadRole");
      const { name, email, password, role, slug } = body;

      if (!name || !email || !password || !slug)
        return this.badRequest(
          c,
          "Please insert name, email, password and slug.",
        );

      if (role) roleLevel(userRole, role);

      const usr = await AuthService.FindCredentialByEmail(email);
      if (usr) return this.conflict(c, "Email already exist.");

      const pss = await bcrypt.hash(password, 12);

      const res = await AuthService.Register({
        name,
        email,
        password: pss,
        role: (role as Role) || undefined,
        slug,
      });
      const { accessToken, refreshToken } = await generateTokens({
        id: res.id,
        role: res.role,
        studentId: res.student?.id,
      });

      return this.ok(c, "Successfully register.", {
        accessToken,
        refreshToken,
      });
    } catch (error) {
      return this.badRequest(c, `Failed to register. ${error}`);
    }
  };

  Refresh = async (c: Context) => {
    try {
      var token = getRefreshCookie(c);
      if (!token) {
        const tokenHeader = c.req.header("Authorization");
        token = tokenHeader?.split(" ")[1];
      }
      if (!token) return this.unauthorized(c);
      const { accessToken, refreshToken } = await refreshSession(token);
      return this.ok(c, "Successfully refresh.", { accessToken, refreshToken });
    } catch (error) {
      return this.badRequest(c, `Failed to refresh. ${error}`);
    }
  };

  Logout = async (c: Context) => {
    try {
      const authHeader = c.req.header("Authorization");
      if (!authHeader) return this.unauthorized(c, "You are not logged in.");
      return this.noContent(c);
    } catch (error) {
      return this.badRequest(c, `Failed to logout. ${error}`);
    }
  };

  VerifyBeforeResetPassword = async (c: Context) => {
    try {
      const id: string = c.get("jwtPayloadId");
      const role: Role = c.get("jwtPayloadRole");

      const body = await c.req.json<{ oldPassword: string }>();
      const { oldPassword } = body;

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
      const body = await c.req.json<{ newPassword: string }>();
      if (!token)
        return this.unauthorized(
          c,
          "Use change password or forget password first!",
        );

      const isVerify = await resetSession(token);
      if (!isVerify.id) return this.unauthorized(c, "Reset session end!");

      const pss = await bcrypt.hash(body.newPassword, 12);
      const res = await AuthService.UpdateUserPassword(isVerify.id, {
        password: pss,
      });
      return this.ok(c, "Successfuly change password.");
    } catch (error) {
      return this.badRequest(c, `Failed to reset password. ${error}`);
    }
  };
}

export default AuthController;
