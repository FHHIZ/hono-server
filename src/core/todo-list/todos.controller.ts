import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import { TodosService } from "./todos.service.js";
import { AbsencesService } from "../absence/absences.service.js";
import { TodoSchema } from "./todos.schema.js";

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
      const start = c.req.query("start");
      const end = c.req.query("end");
      const student = c.req.query("student");

      const data = await TodosService.FindAllTodosWithQuery(
        start ? new Date(start) : undefined,
        end ? new Date(end) : undefined,
        student,
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
      const json = await c.req.json();
      const body = TodoSchema.safeParse(json);
      if (!body.success) return this.badRequest(c, body.error.message);
      const { activity } = body.data;

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

  UpdateDone = async (c: Context) => {
    try {
      const TodoId = c.req.param("id");
      if (!TodoId) return this.badRequest(c, "Please insert todo id.");
      const StudentId = c.get("jwtPayloadStudentId");
      const ownership = await TodosService.WhoIsOwnerOfTodo(TodoId, StudentId);
      if (!ownership) return this.notFound(c, "Todo not found!");
      else if (ownership == 2) return this.forbidden(c);
      const data = await TodosService.UpdateDone(TodoId);
      return this.ok(c, "Successfuly update todo", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update. ${error}`);
    }
  };

  Update = async (c: Context) => {
    try {
      const id = c.req.param("id");
      if (!id) return this.badRequest(c, "Please insert todo id!");
      const IsTodoExist = await TodosService.IsTodoExist(id);
      if (!IsTodoExist) return this.notFound(c, "Todo not found!");

      const json = await c.req.json();
      const body = TodoSchema.safeParse(json);
      if (!body.success) return this.badRequest(c, body.error.message);

      const data = await TodosService.Update(id, body.data);
      return this.ok(c, "Successfuly update todo", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update. ${error}`);
    }
  };

  Delete = async (c: Context) => {
    try {
      const TodoId = c.req.param("id");
      if (!TodoId) return this.badRequest(c, "Please insert todo id.");
      const StudentId = c.get("jwtPayloadStudentId");
      const ownership = await TodosService.WhoIsOwnerOfTodo(TodoId, StudentId);
      if (!ownership) return this.notFound(c, "Todo not found!");
      else if (ownership == 2) return this.forbidden(c);
      const data = await TodosService.Delete(TodoId);
      return this.ok(c, "Successfuly delete todo", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update. ${error}`);
    }
  };
}

export default TodosController;
