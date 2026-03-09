import type { Context, Next } from "hono";
import BaseController from "../base/controller.base.js";

const res = new BaseController();
export async function roleLevel(userRole: string, role: string) {
  return async (c: Context, next: Next) => {
    const level_role = {
      admin: 2,
      teacher: 1,
    } as const;

    type Role = keyof typeof level_role;

    const userLevel = level_role[userRole as Role] || 0;
    const targetLevel = level_role[role as Role] || 0;

    if (userLevel <= targetLevel && userRole !== "admin") {
      return res.forbidden(c);
    }
    await next();
  };
}
