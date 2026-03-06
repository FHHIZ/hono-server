import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import { TodosService } from "./todos.service.js";
import type { TodosType } from "../../type/type.js";
import type { Role } from "../../generated/prisma/index.js";
import { getTodayRangeWIB } from "../../helpers/todayTime.js";
import { StudentService } from "../student/student.service.js";

class TodosController extends BaseController {
  constructor() {
    super();
  }

  MyTodoToday = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadStudentId");
      const role: Role = c.get("jwtPayloadRole");

      if (!id) {
        return this.badRequest(c, "Student id is required.");
      } else if (role !== "student") {
        return this.badRequest(c, "This feature is supposed for student only!");
      }

      const { start, end } = getTodayRangeWIB();

      const data = await TodosService.findMyTodosToday(id, start, end);

      return this.ok(c, "Successfuly show todo for today.", data!);
    } catch (error) {
      return this.badRequest(c, `Failed to show todo for today. ${error}`);
    }
  };

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
      const id = c.get("jwtPayloadId");
      const body = await c.req.json<TodosType>();

      const student_id = await StudentService.findByUserIdForStudentId(id);
      if (!student_id?.id)
        return this.badRequest(c, "This feature x  for students!");

      const merge = { ...body, student_id: student_id?.id };

      const data = await TodosService.CreateTodos(merge);
      return this.ok(c, "Successfuly create todos", data);
    } catch (error) {
      return this.badRequest(c, `Failed to create todos. ${error}`);
    }
  };
}

export default TodosController;
