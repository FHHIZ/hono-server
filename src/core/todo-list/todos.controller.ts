import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import { TodosService } from "./todos.service.js";
import type { TodosType } from "../../type/type.js";
import type { Role } from "../../generated/prisma/index.js";
import { DateHelpers } from "../../helpers/dateWIB.js";
import { StudentService } from "../student/student.service.js";
import { AbsencesService } from "../absence/absences.service.js";

class TodosController extends BaseController {
  constructor() {
    super();
  }

  MyTodoToday = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadStudentId");
      if (!id) return this.badRequest(c, "Student id is required.");

      const data = await TodosService.FindMyTodosToday(id);

      return this.ok(c, "Successfuly show todo for today.", data!);
    } catch (error) {
      return this.badRequest(c, `Failed to show todo for today. ${error}`);
    }
  };

  GetAll = async (c: Context) => {
    try {
      const date = c.req.query("date");

      const data = await TodosService.FindAllTodosWithQuery(
        date ? new Date(date) : undefined,
      );

      return this.ok(c, "Successfuly get all todos", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all todos. ${error}`);
    }
  };

  GetOne = async (c: Context) => {
    try {
      const id = c.req.param("id");
      if (!id) return this.badRequest(c, "User id is required");

      const data = await TodosService.FindOneTodosById(id);
      if (!data) return this.badRequest(c, "Invalid user id");

      return this.ok(c, "Successfuly get todos", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get todos. ${error}`);
    }
  };

  Create = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadId");
      const body = await c.req.json<TodosType>();
      const { activity } = body;

      const student_id = c.get("jwtPayloadStudentId");
      if (!student_id)
        return this.badRequest(c, "This feature is for students!");

      const absence_id = await AbsencesService.FindMyAbsenceToday(student_id);
      if (!absence_id)
        return this.badRequest(
          c,
          "We couldn't find your attendance for today. Please check in first!",
        );

      const data = {
        id,
        activity,
        absence_id: absence_id?.id,
      };

      const res = await TodosService.Create(data);
      return this.ok(c, "Successfuly create todos", res);
    } catch (error) {
      return this.badRequest(c, `Failed to create todos. ${error}`);
    }
  };
}

export default TodosController;
