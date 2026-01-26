import { sign, verify } from "hono/jwt";
import { getRefreshCookie, setRefreshCookie } from "./cookies.js";
import type { Context } from "hono";
import BaseController from "../base/controller.base.js";

const res = new BaseController();
const accjwt = process.env.ACCESS_SECRET!;
const rfjwt = process.env.REFRESH_SECRET!;

export const generateTokens = async (user: { id: string; role: string }) => {
  const accessToken = await sign(
    {
      id: user.id,
      role: user.role,
      exp: Math.floor(Date.now() / 1000) + 60 * 15, // 15 menit
    },
    accjwt,
  );

  const refreshToken = await sign(
    {
      id: user.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 hari
    },
    rfjwt,
  );

  return { accessToken, refreshToken };
};

export async function decodeAccess(token: string) {
  const data = await verify(token, accjwt, "HS256");
  return { data };
}

export async function refreshSession(token: string) {
  const data = (await verify(token, rfjwt, "HS256")) as {
    id: string;
    role: string;
  };

  const { accessToken, refreshToken } = await generateTokens({
    id: data.id,
    role: data.role,
  });

  return { accessToken, refreshToken };
}
