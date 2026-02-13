import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import StudentController from "./student.controller.js";

const SC = new StudentController();
export const StudentRoute = new Hono()
  .get("/get-all", isAuthenticated(), SC.getAll)
  .get("/get-one", isAuthenticated(), SC.getOne)
  .post("/create", isAuthenticated(["admin", "teacher"]), SC.Create)
  .post("/update", isAuthenticated(["admin", "teacher"]), SC.Update);
