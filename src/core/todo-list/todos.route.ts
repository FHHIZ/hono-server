import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import TodosController from "./todos.controller.js";

const TC = new TodosController();
export const TodosRoute = new Hono()
  .get("/get-all", isAuthenticated(), TC.getAll)
  .get("/get-one/:id", isAuthenticated(), TC.getOne)
  .post("/create", isAuthenticated(), TC.Create)
  .put("/update/:id", isAuthenticated(), TC.Update);
