import type { Context, Next } from "hono";
import BaseController from "../base/controller.base.js";
import { accessSession } from "../helpers/jwt.js";
import type { Role } from "../generated/prisma/index.js";

const res = new BaseController();

export const isAuthenticated = (requiredRole?: Role[]) => {
  return async (c: Context, next: Next) => {
    const authHeader = c.req.header("Authorization");
    const accessToken = authHeader?.split(" ")[1];

    try {
      // 1. Verifikasi access token
      const payload = await accessSession(accessToken!);
      if (!payload) return res.unauthorized(c);

      // 2. Cek syarat role
      if (requiredRole) {
        if (
          payload.data.role !== "admin" &&
          !requiredRole.includes(payload.data.role as Role)
        ) {
          return res.forbidden(c);
        }
      }

      // 3. Simpan untuk context (data yang bisa digunakan setelah logic ini)
      c.set("jwtPayloadId", payload.data.id);
      c.set("jwtPayloadRole", payload.data.role);
      await next();
    } catch (e) {
      return res.unauthorized(c);
    }
  };
};
