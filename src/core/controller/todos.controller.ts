import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import { TodosService } from "../service/todos.service.js";

class TodosController extends BaseController {
  constructor() {
    super();
  }

  getAll = async (c: Context) => {
    try {
      const startRaw = c.req.query("start");
      const endRaw = c.req.query("end");

      const start = startRaw ? new Date(startRaw) : undefined;
      const end = endRaw ? new Date(endRaw) : undefined;

      const data = await TodosService.findAllTodos(start, end);

      return this.ok(c, "Successfuly get all user", data);
    } catch (error) {
      return this.badRequest(c, "succesulyy failed");
    }
  };

  getOne = async (c: Context) => {
    try {
      const id = c.req.param("id");

      if (!id) {
        return this.badRequest(c, "User id is required");
      }

      const data = await TodosService.FindOneTodos(id);

      return this.ok(c, "Successfuly get one user", data);
    } catch (error) {
      return this.badRequest(c, "succesulyy failed");
    }
  };

  // Create = async (c: Context) => {
  //   try {
  //     const id: string = c.req.param("id");
  //     const body = await c.req.json<createRequest>();

  //     if (!id) {
  //       return this.badRequest(c, "User id is required");
  //     }

  //     //   const data = await AuthService.updateUser(id, body);

  //     return this.ok(c, "Successfuly Edit user", "data");
  //   } catch (error) {
  //     return this.badRequest(c, "succesulyy failed");
  //   }
  // };

  // Update = async (c: Context) => {
  //   try {
  //     const id: string = c.req.param("id");
  //     const body = await c.req.json<>();

  //     if (!id) {
  //       return this.badRequest(c, "User id is required");
  //     }

  //     //   const data = await AuthService.updateUser(id, body);

  //     return this.ok(c, "Successfuly Edit user", "data");
  //   } catch (error) {
  //     return this.badRequest(c, "succesulyy failed");
  //   }
  // };
}

export default TodosController;
