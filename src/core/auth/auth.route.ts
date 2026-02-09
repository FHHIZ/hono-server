import { Hono } from "hono";
import AuthController from "./auth.controller.js";
import { isAuthenticated } from "../../middleware/authentication.js";
import HTMLController from "./email.controller.js";

const AC = new AuthController();
const HTMLC = new HTMLController();

export const AuthRoute = new Hono()
  .post("/login", AC.login)
  .post("/register", isAuthenticated(["teacher", "student"]), AC.register)
  .get("/refresh", AC.refresh)
  .get("/logout", AC.logout)
  .post("/change-password", isAuthenticated(), AC.changePassword)
  .post("/forgot-password", HTMLC.forgetPassword)
  .post("/reset-password", AC.resetPassword);
