import { Hono } from "hono";
import AuthController from "../core/controller/auth.controller.js";
import { isAuthenticated } from "../middleware/authentication.js";

const controller = new AuthController();
const Auth = new Hono()
  .post("/login", controller.login)
  .post("/register", controller.register)
  .post("/refresh", controller.refresh) // ada auto refresh
  .use("/logout", isAuthenticated())
  .post("/logout", controller.logout);

const StudentClass = new Hono()
  .use("/*", isAuthenticated())
  .post("/message", (c) => c.text("hello world!"));

export const Routes = new Hono()
  .route("/auth", Auth)
  .route("/class", StudentClass);
