import type { Context } from "hono";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (
  c: Context,
  to: any,
  subject: string,
  html: any,
) => {
  if (!html) throw Error("HTML cannot be empty!");
  const abc = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  });
  return c.json({ abc });
};
