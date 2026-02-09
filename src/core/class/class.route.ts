import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import ClassController from "./class.controller.js";

const CC = new ClassController();
export const ClassRoute = new Hono()
  .get("/get-all", isAuthenticated(), CC.getAll)
  .get("/get-one/:id", isAuthenticated(), CC.getOne)
  .post("/create", isAuthenticated(["admin", "teacher"]), CC.createClass)
  .put("/update/:id", isAuthenticated(["admin", "teacher"]), CC.Update);
