import type { Context } from "hono";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";

export function setRefreshCookie(c: Context, token: string) {
  setCookie(c, "rftkn", token, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 14, // 14 hari
  });
}

export function getRefreshCookie(c: Context) {
  return getCookie(c, "rftkn");
}

export function removeRefreshCookie(c: Context) {
  return deleteCookie(c, "rftkn");
}
