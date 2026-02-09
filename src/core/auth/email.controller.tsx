import BaseController from "../../base/controller.base.js";
import { AuthService } from "./auth.service.js";
import { generateTokens } from "../../helpers/jwt.js";

import { sendEmail } from "../../helpers/mail.js";
import type { Context } from "hono";
import { EmailResetTemplate } from "../../view/email.js";
import { UAParser } from "ua-parser-js";

class HTMLController extends BaseController {
  constructor() {
    super();
  }

  forgetPassword = async (c: Context) => {
    try {
      const body = await c.req.json<{ email: string }>();

      const usr = await AuthService.findByEmailForPassword(body.email);
      if (!usr) return this.badRequest(c, "Email not found");
      const tempToken = (await generateTokens({ id: usr.id, role: usr.role }))
        .tempToken;

      const userAgent = c.req.header("user-agent") || "";
      const parser = new UAParser(userAgent);
      const uaResult = parser.getResult();

      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Asia/Jakarta",
      }).format(now);

      let deviceInfo = "";

      if (uaResult.browser.name && uaResult.os.name) {
        deviceInfo = `${uaResult.browser.name} di ${uaResult.os.name}`;
      } else if (uaResult.device.model) {
        deviceInfo = uaResult.device.model;
      } else {
        deviceInfo = uaResult.ua;
      }

      const html = await EmailResetTemplate({
        token: tempToken,
        email: usr.email,
        time: formattedTime,
        reqInfo: deviceInfo,
      });
      return await sendEmail(c, usr.email, "Reset Password", `${html}`);
    } catch (error) {
      return this.badRequest(c, error as string);
    }
  };
}

export default HTMLController;
