import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import { TodosService } from "./todos.service.js";
import type { TodosType } from "../../type/type.js";

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

      return this.ok(c, "Successfuly get all todos", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all todos. ${error}`);
    }
  };

  getOne = async (c: Context) => {
    try {
      const id = c.req.param("id");

      if (!id) {
        return this.badRequest(c, "User id is required");
      }

      const data = await TodosService.FindOneTodos(id);

      return this.ok(c, "Successfuly get todos", data!);
    } catch (error) {
      return this.badRequest(c, `Failed to get todos. ${error}`);
    }
  };

  Create = async (c: Context) => {
    try {
      const body = await c.req.json<TodosType>();
      const data = await TodosService.CreateTodos(body);
      return this.ok(c, "Successfuly create todos", data);
    } catch (error) {
      return this.badRequest(c, `Failed to create todos. ${error}`);
    }
  };

  Update = async (c: Context) => {
    try {
      const id: string = c.req.param("id");
      const body = await c.req.json<TodosType>();

      if (!id) {
        return this.badRequest(c, "User id is required");
      }

      const data = await TodosService.UpdateTodos(id, body);

      return this.ok(c, "Successfuly update todo", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update todos. ${error}`);
    }
  };

    myAbsencesToday = async (c: Context) => {
    try {
      const id: string = c.req.param("id");
      if (!id) {
        return this.badRequest(c, "User id is required");
      }

      const now = new Date();

      const start = new Date(now);
      start.setHours(0, 0, 0, 0);

      const end = new Date(now);
      end.setHours(23, 59, 59, 999);

      const data = await TodosService.findMyTodosToday( start, end, id );

      return this.ok(c, "Successfuly update todo", data!);
    } catch (error) {
      return this.badRequest(c, `Failed to update todos. ${error}`);
    }
  };
}

export default TodosController;
