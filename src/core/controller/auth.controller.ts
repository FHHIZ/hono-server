import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import { AuthService } from "../service/auth.service.js";
import bcrypt from "bcryptjs";
import { generateTokens, refreshSession } from "../../helpers/jwt.js";
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

  logout = async (c: Context) => {
    removeRefreshCookie(c);
    return this.noContent(c);
  };

  refresh = async (c: Context) => {
    const token = getRefreshCookie(c);
    if (!token) return this.unauthorized(c);
    const { accessToken, refreshToken } = await refreshSession(token);

    setRefreshCookie(c, refreshToken);
    c.header("X-Access-Token", accessToken);

    return this.ok(c, "Successfully Refresh");
  };
}
export default AuthController;
