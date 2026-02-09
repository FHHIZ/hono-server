import type { Context } from "hono";

class BaseController {
  continue(c: Context, message = "") {
    return c.json(
      {
        success: true,
        message: message || "Continue",
      },
      100,
    );
  }

  ok(c: Context, message = "", data = {}) {
    return c.json(
      {
        success: true,
        message: message || "Successful",
        data,
      },
      200,
    );
  }

  noContent = (c: Context) => {
    return c.body(null, 204);
  };

  badRequest = (c: Context, message = "") => {
    return c.json(
      {
        success: false,
        message: message || "Successfully failed",
      },
      400,
    );
  };

  unauthorized = (c: Context, message = "") => {
    return c.json(
      {
        success: false,
        message: message || "Unauthorized",
      },
      401,
    );
  };

  forbidden = (c: Context, message = "") => {
    return c.json(
      {
        success: false,
        message: message || "Forbidden",
      },
      403,
    );
  };

  unprocessable = (c: Context, message = "") => {
    return c.json(
      {
        success: false,
        message: message || "Successfully failed",
      },
      422,
    );
  };

  conflict = (c: Context, message = "") => {
    return c.json(
      {
        success: false,
        message: message || "Conflict",
      },
      409,
    );
  };
}

export default BaseController;
