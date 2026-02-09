import { Hono } from "hono";
import { AuthRoute } from "../core/auth/auth.route.js";
import { StudentRoute } from "../core/student/student.route.js";
import { UserRoute } from "../core/user/user.route.js";
import { ClassRoute } from "../core/class/class.route.js";
import { AbsencesRoute } from "../core/absence/absences.route.js";
import { TodosRoute } from "../core/todo-list/todos.route.js";

export const Routes = new Hono()
  .route("/auth", AuthRoute)
  .route("/user", UserRoute)
  .route("/student", StudentRoute)
  .route("/class", ClassRoute)
  .route("/todos", TodosRoute)
  .route("/absen", AbsencesRoute);
