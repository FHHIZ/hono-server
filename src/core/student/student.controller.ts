import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import type { StudentType } from "../../type/type.js";
import { StudentService } from "./student.service.js";
import { UserService } from "../user/user.service.js";
import { ClassService } from "../class/class.service.js";

class StudentController extends BaseController {
  constructor() {
    super();
  }

  getAll = async (c: Context) => {
    try {
      const query = c.req.query("q") ?? "";

      const data = await StudentService.findAllStudent(query);

      return this.ok(c, "Successfuly get all student", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all student. ${error}`);
    }
  };

  getOne = async (c: Context) => {
    try {
      const id = c.req.param("id");

      if (!id) {
        return this.badRequest(c, "Student id is required");
      }

      const isStudent = await StudentService.findById(id);
      if (!isStudent) return this.badRequest(c, "Student was not found.");

      const data = await StudentService.findOneStudent(id);

      return this.ok(c, "Successfuly get student", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get student. ${error}`);
    }
  };

  Update = async (c: Context) => {
    try {
      const id: string = c.req.param("id");
      const body = await c.req.json<StudentType>();

      if (!id) {
        return this.badRequest(c, "Class id is required");
      }

      const isStudent = await StudentService.findById(body.user_id);
      if (!isStudent) return this.badRequest(c, "Student was not found.");

      const isUser = await UserService.findById(body.user_id);
      if (!isUser) return this.badRequest(c, "User was not found.");
      else if (isUser?.role !== "student") return this.forbidden(c);

      const isClass = await ClassService.findById(body.class_id);
      if (!isClass) return this.badRequest(c, "Class was not found");

      const data = await StudentService.updateStudent(id, body);

      return this.ok(c, "Successfuly update student", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update student. ${error}`);
    }
  };

  Create = async (c: Context) => {
    try {
      const body = await c.req.json<StudentType>();
      const { user_id, class_id, nis } = body;

      if (!user_id || !class_id || !nis)
        return this.badRequest(c, "Please insert user_id, class_id and nis");

      const isUser = await UserService.findById(user_id);
      if (!isUser) return this.badRequest(c, "User was not found.");
      else if (isUser?.role !== "student") return this.forbidden(c);

      const isClass = await ClassService.findById(class_id);
      if (!isClass) return this.badRequest(c, "Class was not found");

      const res = await StudentService.createStudent(body);
      return this.ok(c, "Successfully create student", res);
    } catch (error) {
      return this.badRequest(c, `Failed to create student. ${error}`);
    }
  };
}

export default StudentController;
