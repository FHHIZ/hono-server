import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import { AbsencesService } from "./absences.service.js";
import { AbsenceQuerySchema } from "../../zod/query.js";
import { TodosService } from "../todo-list/todos.service.js";
import { DateHelpers } from "../../helpers/dateWIB.js";
import type { AttendanceStatus } from "../../generated/prisma/index.js";
import type {
  AbsenceQuery,
  UpdateAbsenceTypeByAdmin,
} from "../../type/type.js";

class AbsenController extends BaseController {
  constructor() {
    super();
  }

  ShowMyAbsences = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadStudentId");
      if (!id) return this.notFound(c, "Student id not found!");
      const data = await AbsencesService.FindMyAbsenceToday(id);
      if (!data) return this.notFound(c, "Absence today");
      return this.ok(c, "Successfuly get your absence summary.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all absence. ${error}`);
    }
  };

  CountMyAbsences = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadStudentId");
      const data = await AbsencesService.CountMyAbsences(id);
      return this.ok(c, "Successfuly count your absence.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all absence. ${error}`);
    }
  };

  GetAll = async (c: Context) => {
    try {
      const start = c.req.query("start");
      const end = c.req.query("end");

      const query: AbsenceQuery = {
        date_start: start ? new Date(start) : undefined,
        date_end: end ? new Date(end) : undefined,
      };

      const data = await AbsencesService.FindAllAbsenceSummaryWithQuery(query);
      return this.ok(c, "Successfuly get all absence", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all absence. ${error}`);
    }
  };

  GetOne = async (c: Context) => {
    try {
      const id = c.req.param("id");

      if (!id) {
        return this.badRequest(c, "Absence id is required");
      }

      const data = await AbsencesService.FindOneAbsenceDetailById(id);
      if (!data) return this.notFound(c, "Absences not found.");

      return this.ok(c, "Successfuly get absence", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get absence. ${error}`);
    }
  };

  UpdateByStudent = async (c: Context) => {
    const { BlockRequestOnWeekend, CheckIsLate } = DateHelpers();
    try {
      BlockRequestOnWeekend();
      const id_student = c.get("jwtPayloadStudentId");
      if (!id_student) return this.forbidden(c, "Id student not found.");

      const response = await AbsencesService.FindMyAbsenceToday(id_student);

      const id_absence = response?.id;
      if (!id_absence) return this.badRequest(c, "Id absence not found.");

      // cek apaakah todo hari ini sudah ada dua
      const todo = await TodosService.FindMyTodosToday(id_student);
      const min2Todo = todo.length || 0 >= 2;
      if (!min2Todo) {
        return this.badRequest(
          c,
          `You need ${2 - (todo.length || 0)} To Do List for doing absences!`,
        );
      }

      // cek apakah hari ini sudah absen
      const pendingAbsence =
        await AbsencesService.GetPendingAbsence(id_absence);
      if (!pendingAbsence)
        return this.badRequest(c, `You already absences today!`);

      const res = await AbsencesService.UpdateAbsenceByStudent(
        id_absence,
        pendingAbsence,
        pendingAbsence == "ABSENT" && CheckIsLate() ? "LATE" : "PRESENT",
      );
      return this.ok(c, "Successfully create absence.", res);
    } catch (error) {
      return this.badRequest(c, `Failed to create absence. ${error}`);
    }
  };

  Reject = async (c: Context) => {
    try {
      const id = c.req.param("id");
      const body = await c.req.json<{ teacher_note: string }>();
      const absences = await AbsencesService.GetPendingAbsence(id);
      if (!absences) return this.badRequest(c, "Invalid Id absence.");

      const data = {
        status: "RESUBMIT" as AttendanceStatus,
        has_todo: false,
        teacher_note: body.teacher_note,
      };

      const res = await AbsencesService.UpdateAbsence(id, data);
      return this.ok(c, "Successfully create absence.", res);
    } catch (error) {
      return this.badRequest(c, `Failed to create absence. ${error}`);
    }
  };

  Update = async (c: Context) => {
    try {
      const id = c.req.param("id");
      if (!id) return this.notFound(c, "Absence id not found!");
      const body = await c.req.json<UpdateAbsenceTypeByAdmin>();

      const res = AbsencesService.UpdateAbsence(id, body);

      return this.ok(c, "Successfully create absence.", res);
    } catch (error) {
      return this.badRequest(c, `Failed to create absence. ${error}`);
    }
  };
}

export default AbsenController;
