import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import AbsenController from "./absences.controller.js";

const AC = new AbsenController();

export const AbsencesRoute = new Hono()
  .get("/me/attendance-summary", isAuthenticated(), AC.CountMyAbsences)
  .get("/get-all", isAuthenticated(), AC.getAll)
  .get("/get-one/:id", isAuthenticated(), AC.getOne)
  .post("/create", isAuthenticated(), AC.create)
  .put("/update/:id", isAuthenticated(), AC.Update);
