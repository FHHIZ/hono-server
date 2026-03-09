import type { Context, Next } from "hono";
import BaseController from "../base/controller.base.js";

const res = new BaseController();

export const ContentType = (preferredContentType: "JSON" | "FormData") => {
  return async (c: Context, next: Next) => {
    const contentType = c.req.header("Content-Type");
    if (
      preferredContentType == "JSON" &&
      contentType?.includes("application/json")
    )
      await next();
    else if (
      (preferredContentType == "FormData" &&
        contentType?.includes("multipart/form-data")) ||
      contentType?.includes("application/x-www-form-urlencoded")
    )
      await next();
    else return res.unsupportedMediaType(c);
  };
};
