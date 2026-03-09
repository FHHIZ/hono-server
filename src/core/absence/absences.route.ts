import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import AbsenController from "./absences.controller.js";
import { ContentType } from "../../middleware/content-type.js";

const AC = new AbsenController();

export const AbsencesRoute = new Hono()
  .get(
    "/me", 
    isAuthenticated(["STUDENT"]), 
    AC.ShowMyAbsences
  )
  .get(
    "/me/getWeeklyTotal", 
    isAuthenticated(["STUDENT"]), 
    AC.CountMyAbsences
  )
  .get(
    "/get-all", 
    isAuthenticated(), 
    AC.GetAll
  )
  .get(
    "/get-one/:id", 
    isAuthenticated(), 
    AC.GetOne
  )
  .put(
    "/check-in",
    isAuthenticated(["STUDENT"]),
    AC.UpdateByStudent,
  )
  .put(
    "/reject",
    isAuthenticated(["ADMIN", "TEACHER"]),
    ContentType("JSON"),
    AC.Reject,
  )
  .put(
    "/edit/:id",
    isAuthenticated(["ADMIN", "TEACHER"]),
    ContentType("JSON"),
    AC.Update,
  );
