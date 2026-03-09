import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import StudentController from "./student.controller.js";

const SC = new StudentController();
export const StudentRoute = new Hono()
  .get("/get-all", isAuthenticated(), SC.GetAll)
  .get("/get-one/:id", isAuthenticated(), SC.GetOne)
  .post("/create", isAuthenticated(["ADMIN", "TEACHER"]), SC.Create)
  .post("/update", isAuthenticated(["ADMIN", "TEACHER"]), SC.Update);
