import type { Context, Next } from "hono";
import BaseController from "../../base/controller.base.js";
import { AuthService } from "../service/auth.service.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  refreshSession,
  resetSession,
} from "../../helpers/jwt.js";
import {
  getRefreshCookie,
  removeRefreshCookie,
  setRefreshCookie,
} from "../../helpers/cookies.js";
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

    setRefreshCookie(c, refreshToken);
    c.header("X-Access-Token", accessToken);

    return this.ok(c, "Successfully Login");
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

    setRefreshCookie(c, refreshToken);
    c.header("X-Access-Token", accessToken);

    return this.ok(c, "Successfully Register");
  };

  refresh = async (c: Context) => {
    const token = getRefreshCookie(c);
    if (!token) return this.unauthorized(c);
    const { accessToken, refreshToken } = await refreshSession(token);

    setRefreshCookie(c, refreshToken);
    c.header("X-Access-Token", accessToken);

    return this.ok(c, "Successfully Refresh");
  };

  logout = async (c: Context) => {
    removeRefreshCookie(c);
    return this.noContent(c);
  };

  me = async (c: Context) => {
    try {
      const id = c.get("jwtPayload");
      const data = await AuthService.findById(id);
      return this.ok(c, "Success Show Me", data!);
    } catch (error) {
      return this.badRequest(c, error as string);
    }
  };

  changePassword = async (c: Context) => {
    try {
      const id = c.get("jwtPayload");

      const body = await c.req.json<{ password: string }>();
      const { password } = body;

      const usr = await AuthService.findByIdForPassword(id);
      if (!usr) return this.badRequest(c, "Invalid action");
      const isMatch = await bcrypt.compare(password, usr.password);
      if (!isMatch) return this.badRequest(c, "Invalid password");

      const tempToken = (await generateTokens(id)).tempToken;

      c.header("x-reset-token", tempToken);
      return this.noContent(c);
    } catch (error) {
      return this.badRequest(c, error as string);
    }
  };

  resetPassword = async (c: Context) => {
    // try {
    const token = c.req.header("x-reset-token");
    if (!token)
      return this.unauthorized(
        c,
        "Use change password or forget password first!",
      );

    const isVerify = await resetSession(token);
    if (!isVerify) return this.unauthorized(c, "Reset Session End!");

    return { isVerify };

    //   const body = await c.req.json<{ password: string }>();
    //   const { password } = body;

    //   await AuthService.updatePassword(isVerify.data.id, { password });
    //   return this.ok(c, "Success Update Password");
    // } catch (error) {
    //   return this.badRequest(c, `${error as string} ${isVerify.data.id}`);
    // }
  };
}

export default AuthController;
