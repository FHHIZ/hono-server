import { Hono } from "hono";
import { isAuthenticated } from "../../middleware/authentication.js";
import TodosController from "./todos.controller.js";

const TC = new TodosController();
export const TodosRoute = new Hono()
  .get("/me", isAuthenticated(["STUDENT"]), TC.MyTodoToday)
  .get("/get-all", isAuthenticated(), TC.GetAll)
  .get("/get-one/:id", isAuthenticated(), TC.GetOne)
  .post("/create", isAuthenticated(["STUDENT"]), TC.Create)
  .put("/update/:id", isAuthenticated(["STUDENT"]), TC.Update)
  .patch("/markAsDone/:id", isAuthenticated(["STUDENT"]), TC.UpdateDone)
  .delete("/delete/:id", isAuthenticated(), TC.Delete);
