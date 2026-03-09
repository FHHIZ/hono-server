import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import ClassController from "./class.controller.js";
import { ContentType } from "../../middleware/content-type.js";

const CC = new ClassController();
export const ClassRoute = new Hono()
  .get(
    "/get-all", 
    isAuthenticated(), 
    CC.GetAll
  )
  .get(
    "/get-one/:id", 
    isAuthenticated(), 
    CC.GetOne
  )
  .post(
    "/create", 
    isAuthenticated(["ADMIN"]), 
    ContentType("JSON"), 
    CC.Create
  )
  .put(
    "/update/:id",
    isAuthenticated(["ADMIN"]),
    ContentType("JSON"),
    CC.Update,
  );
