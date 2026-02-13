import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import UsersController from "./user.controller.js";

const UC = new UsersController();
export const UserRoute = new Hono()
  .get("/me", isAuthenticated(), UC.me)
  .get("/get-all", isAuthenticated(), UC.getAll)
  .get("/get-one/:id", isAuthenticated(), UC.getOne)
  .put("/update/:id", isAuthenticated(), UC.Update);
