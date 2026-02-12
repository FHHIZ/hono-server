import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import type { AbsenceType } from "../../type/type.js";
import { AbsencesService } from "./absences.service.js";
import { Status } from "../../generated/prisma/index.js";
import { StudentService } from "../student/student.service.js";

class AbsenController extends BaseController {
  constructor() {
    super();
  }

  getAll = async (c: Context) => {
    try {
      const query = c.req.query("q");
      const isValid = Object.values(Status).includes(query as Status);

      const data = await AbsencesService.findAllAbsence(
        isValid ? (query as Status) : undefined,
      );

      return this.ok(c, "Successfuly get all absence", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all absence. ${error}`);
    }
  };

  getOne = async (c: Context) => {
    try {
      const id = c.req.param("id");

      if (!id) {
        return this.badRequest(c, "Absence id is required");
      }

      const data = await AbsencesService.findOneAbsence(id);

      return this.ok(c, "Successfuly get absence", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get absence. ${error}`);
    }
  };

  create = async (c: Context) => {
    try {
      const body = await c.req.json<AbsenceType>();
      const { status, student_id, has_todo } = body;

      if (!status || !student_id)
        return this.badRequest(c, "Please insert status, and student_id");

      const isStudent = await StudentService.findById(student_id);
      if (!isStudent) return this.badRequest(c, "Id student not found");

      const res = await AbsencesService.createAbsence({
        status,
        student_id,
        has_todo,
      });
      return this.ok(c, "Successfully create absence", res);
    } catch (error) {
      return this.badRequest(c, `Failed to create absence. ${error}`);
    }
  };

  Update = async (c: Context) => {
    try {
      const id: string = c.req.param("id");
      const body = await c.req.json<AbsenceType>();

      if (!id) {
        return this.badRequest(c, "Absence id is required");
      }

      const isAbsence = await AbsencesService.findById(id);
      if (!isAbsence) return this.badRequest(c, "Id absence not found");

      const isStudent = await StudentService.findById(body.student_id);
      if (!isStudent) return this.badRequest(c, "Id student not found");

      const data = await AbsencesService.updateAbsence(id, body);

      return this.ok(c, "Successfuly update absence", data);
    } catch (error) {
      return this.badRequest(c, `Failed to update absence. ${error}`);
    }
  };
}

export default AbsenController;
