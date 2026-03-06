import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import AbsenController from "./absences.controller.js";

const AC = new AbsenController();

export const AbsencesRoute = new Hono()
  .get("/me", isAuthenticated(), AC.ShowMyAbsences)
  .get("/me/attendance-summary", isAuthenticated(), AC.CountMyAbsences)
  .get("/get-all", isAuthenticated(), AC.getAll)
  .get("/get-one/:id", isAuthenticated(), AC.getOne)
  .put("/update/:id", isAuthenticated(["student"]), AC.UpdateByStudent);
// .put("/update/resubmitted", isAuthenticated(), AC.)
// .put("/update/admin/:id", isAuthenticated(), AC.)
