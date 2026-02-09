import type { Context, Next } from "hono";
import BaseController from "../../base/controller.base.js";
import { AuthService } from "../service/auth.service.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  refreshSession,
  resetSession,
} from "../../helpers/jwt.js";
import { getRefreshCookie } from "../../helpers/cookies.js";
import type { LoginBody, RegisterBody } from "../../type/type.js";

class AuthController extends BaseController {
  constructor() {
    super();
  }

  login = async (c: Context) => {
    const body = await c.req.json<LoginBody>();
    const { email, password } = body;

    if (!email || !password)
      return this.badRequest(c, "Please insert email and password");

    const usr = await AuthService.findByEmail(email);
    if (!usr) return this.badRequest(c, "Invalid email or password");

    const pss = await bcrypt.compare(password, usr.password);
    if (!pss) return this.badRequest(c, "Invalid email or password");

    const { accessToken, refreshToken } = await generateTokens({
      id: usr.id,
      role: usr.role,
    });

    return this.ok(c, "Successfully Login", { accessToken, refreshToken });
  };

  register = async (c: Context) => {
    const body = await c.req.json<RegisterBody>();
    const { name, email, password } = body;

    if (!name || !email || !password)
      return this.badRequest(c, "Please insert name, email, and password");

    const usr = await AuthService.findByEmail(email);
    if (usr) return this.conflict(c, "Email already exist");

    const pss = await bcrypt.hash(password, 12);

    const res = await AuthService.register({ name, email, password: pss });
    const { accessToken, refreshToken } = await generateTokens({
      id: res.id,
      role: res.role,
    });

    return this.ok(c, "Successfully Register", { accessToken, refreshToken });
  };

  refresh = async (c: Context) => {
    const token = getRefreshCookie(c);
    if (!token) return this.unauthorized(c);
    const { accessToken, refreshToken } = await refreshSession(token);
    return this.ok(c, "Successfully Refresh", { accessToken, refreshToken });
  };

  me = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadId");
      const data = await AuthService.findById(id);
      return this.ok(c, "Success Show Me", data!);
    } catch (error) {
      return this.badRequest(c, error as string);
    }
  };

  changePassword = async (c: Context) => {
    try {
      const id: string = c.get("jwtPayloadId");
      const role: string = c.get("jwtPayloadRole");

      const body = await c.req.json<{ oldPassword: string }>();
      const { oldPassword } = body;

      const usr = await AuthService.findByIdForPassword(id);
      if (!usr) return this.badRequest(c, "Invalid action");
      const isMatch = await bcrypt.compare(oldPassword, usr.password);
      if (!isMatch) return this.badRequest(c, "Invalid password");

      const tempToken = (await generateTokens({ id, role })).tempToken;

      c.header("x-reset-token", tempToken);
      return this.ok(c, "Granted access to reset password");
    } catch (error) {
      return this.badRequest(c, error as string);
    }
  };

  // forgetPassword = async (c: Context) => {
  //   try {
  //     const body = await c.req.json<{ email: string }>();
  //     const usr = await AuthService.findByEmailForPassword(body.email);
  //     if (!usr) return this.badRequest(c, "Invalid action");
  //     const tempToken = await generateTokens({ id: usr.id, role: usr.role });
  //     await sendEmail(usr.email, "Reset Password", Email(tempToken));
  //     // return email(tempToken.tempToken);
  //   } catch (error) {
  //     return this.badRequest(c, "Invalid");
  //   }
  // };

  resetPassword = async (c: Context) => {
    try {
      const token = c.req.header("x-reset-token");
      const body = await c.req.json<{ newPassword: string }>();
      if (!token)
        return this.unauthorized(
          c,
          "Use change password or forget password first!",
        );

      const isVerify = await resetSession(token);
      if (!isVerify.id) return this.unauthorized(c, "Reset Session End!");

      const pss = await bcrypt.hash(body.newPassword, 12);
      const res = await AuthService.updatePassword(isVerify.id, {
        password: pss,
      });
      return this.ok(c, "Successfuly change password", res);
    } catch (error) {
      return this.badRequest(c, `${error as string}`);
    }
  };
}

export default AuthController;
