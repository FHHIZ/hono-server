import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import type { StudentType } from "../../type/type.js";
import { StudentService } from "./student.service.js";
import { UserService } from "../user/user.service.js";
import { ClassService } from "../class/class.service.js";
import { AbsencesService } from "../absence/absences.service.js";
import { StudentSchema } from "./student.validation.js";

class StudentController extends BaseController {
  constructor() {
    super();
  }

  GetAll = async (c: Context) => {
    try {
      const query = c.req.query("q") ?? "";

      const data = await StudentService.FindAllStudentSummaryWithQuery(query);

      return this.ok(c, "Successfuly get all student summary.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all student summary. ${error}`);
    }
  };

  GetOne = async (c: Context) => {
    try {
      const id = c.req.param("id");

      if (!id) {
        return this.badRequest(c, "Student id is required.");
      }

      const isStudent = await StudentService.IsStudentExist(id);
      if (!isStudent) return this.badRequest(c, "Student was not found.");

      const data = await StudentService.FindOneStudentDetailWithId(id);

      return this.ok(c, "Successfuly get student detail", data!);
    } catch (error) {
      return this.badRequest(c, `Failed to get student detail. ${error}`);
    }
  };

  Create = async (c: Context) => {
    try {
      const json = await c.req.json();
      const body = StudentSchema.safeParse(json);
      if (!body.success) return this.badRequest(c, body.error.message);
      const { user_id, class_id, nis } = body.data;

      if (!user_id || !class_id || !nis)
        return this.badRequest(c, "Please insert user_id, class_id and nis");

      const isUser = await UserService.IsUserExist(user_id);
      if (!isUser) return this.badRequest(c, "User not found.");

      const isClass = await ClassService.IsClassExist(class_id);
      if (!isClass) return this.badRequest(c, "Class not found.");

      const res = await StudentService.CreateStudent(body.data);

      if (!res.absences) {
        const InitialAbsence = await AbsencesService.Create(res.id);
        return this.ok(
          c,
          "Successfully create student and initial absence",
          res,
        );
      }
      return this.ok(c, "Successfully create student", res);
    } catch (error) {
      return this.badRequest(c, `Failed to create student. ${error}`);
    }
  };

  Update = async (c: Context) => {
    try {
      const id = c.req.param("id");
      const json = await c.req.json();
      const body = StudentSchema.safeParse(json);
      if (!body.success) return this.badRequest(c, body.error.message);
      const { user_id, class_id } = body.data;

      if (!id) return this.badRequest(c, "Class id is required");

      const isStudent = await StudentService.IsStudentExist(user_id);
      if (!isStudent) return this.badRequest(c, "Student not found.");

      const isUser = await UserService.IsUserExist(user_id);
      if (!isUser) return this.badRequest(c, "User not found.");

      const isClass = await ClassService.IsClassExist(class_id);
      if (!isClass) return this.badRequest(c, "Class not found.");

      const data = await StudentService.UpdateStudent(id, body.data);

      return this.ok(c, "Successfuly update student", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update student. ${error}`);
    }
  };
}

export default StudentController;
