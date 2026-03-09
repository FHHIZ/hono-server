import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import UsersController from "./user.controller.js";
import { ContentType } from "../../middleware/content-type.js";

const UC = new UsersController();
export const UserRoute = new Hono()
  .get(
    "/me", 
    isAuthenticated(), 
    UC.Me
  )
  .get(
    "/get-all", 
    isAuthenticated(), 
    UC.GetAll
  )
  .get(
    "/get-one/:id", 
    isAuthenticated(), 
    UC.GetOne
  )
  .put(
    "/update/me", 
    isAuthenticated(), 
    ContentType("JSON"), 
    UC.UpdateMe
  )
  .put(
    "/update/:id",
    isAuthenticated(["ADMIN"]),
    ContentType("JSON"),
    UC.Update,
  );
