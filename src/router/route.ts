import { Hono } from "hono";
import AuthController from "../core/controller/auth.controller.js";
import { isAuthenticated } from "../middleware/authentication.js";
import UsersController from "../core/controller/user.controller.js";
import ClassController from "../core/controller/class.controller.js";

const AuthControl = new AuthController();
const UserControl = new UsersController();
const ClassControl = new ClassController();

const Auth = new Hono()
  .post("/login", AuthControl.login)
  .post("/register", AuthControl.register)
  .get("/refresh", AuthControl.refresh)
  .get("/logout", isAuthenticated(), AuthControl.logout)
  .get("/me", isAuthenticated(), AuthControl.me)
  .post("/change-password", isAuthenticated(), AuthControl.changePassword)
  .post("/forgot-password", isAuthenticated(), AuthControl.logout)
  // .post("/reset-password", isAuthenticated(), AuthControl.resetPassword);

const StudentClass = new Hono()
  .use("/*", isAuthenticated())
  .post("/message", (c) => c.text("hello world!"));

const Users = new Hono()
  .use("/*", isAuthenticated())
  .get("/get-all", UserControl.getAll)
  .get("/get-one/:id", UserControl.getOne)
  .put("/update/:id", UserControl.Update);

const Class = new Hono()
  .get("/get-all", ClassControl.getAll)
  .get("/get-one/:id", ClassControl.getOne)
  .put("/update/:id", ClassControl.Update)
  .post("/create", ClassControl.createClass);

export const Routes = new Hono()
  .route("/auth", Auth)
  .route("/studenclass", StudentClass)
  .route("/user", Users)
  .route("/class", Class);


