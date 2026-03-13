import { Hono } from "hono";
import AuthController from "./auth.controller.js";
import { isAuthenticated } from "../../middleware/authentication.js";
import { ContentType } from "../../middleware/content-type.js";

const AC = new AuthController();

export const AuthRoute = new Hono()
  .post(
    "/login", 
    ContentType("JSON"), 
    AC.Login
  )
  .post(
    "/register",
    isAuthenticated(["ADMIN"]),
    ContentType("JSON"),
    AC.Register,
  )
  .post(
    "/register/student",
    isAuthenticated(["ADMIN"]),
    ContentType("JSON"),
    AC.RegisterManyStudent,
  )
  .get(
    "/refresh", 
    AC.Refresh
  )
  .get(
    "/logout", 
    isAuthenticated(),
    AC.Logout
  )
  .post(
    "/change-password",
    isAuthenticated(),
    ContentType("JSON"),
    AC.VerifyBeforeResetPassword,
  )
  .post(
    "/reset-password", 
    ContentType("JSON"), 
    AC.ResetPassword
  );
