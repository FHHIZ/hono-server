import { verify } from "hono/jwt";
import type { Context, Next } from "hono";
import BaseController from "../base/controller.base.js";

const accjwt = { secret: process.env.ACCESS_SECRET!, alg: "HS256" };
const res = new BaseController();

export const isAuthenticated = (requiredRole?: string) => {
  return async (c: Context, next: Next) => {
    const authHeader = c.req.header("Authorization");
    const accessToken = authHeader?.split(" ")[1];

    try {
      // 1. Verifikasi access token
      const payload = (await verify(accessToken!, accjwt.secret, "HS256")) as {
        id: string;
        role: string;
      };

      // 2. Cek syarat role
      if (requiredRole) {
        if (payload.role !== requiredRole) {
          return res.forbidden(c);
        }
      }

      // 3. Simpan untuk context (data yang bisa digunakan setelah logic ini)
      c.set("jwtPayload", payload.id);
      await next();
    } catch (e) {
      return res.unauthorized(c);
    }
  };
};
