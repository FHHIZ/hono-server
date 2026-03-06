import type { Context } from "hono";
import BaseController from "../../base/controller.base.js";
import { AbsencesService } from "./absences.service.js";
import { AbsenceQuerySchema } from "../../zod/query.js";
import { TodosService } from "../todo-list/todos.service.js";
import { getTimeWIB, getTodayRangeWIB } from "../../helpers/todayTime.js";
import type { Role, Status } from "../../generated/prisma/index.js";

class AbsenController extends BaseController {
  constructor() {
    super();
  }

  ShowMyAbsences = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadStudentId");
      const { start, end } = getTodayRangeWIB();
      const data = await AbsencesService.findMyAbsenceToday(id, start, end);
      return this.ok(c, "Successfuly get your absence.", data!);
    } catch (error) {
      return this.badRequest(c, `Failed to get all absence. ${error}`);
    }
  };

  CountMyAbsences = async (c: Context) => {
    try {
      const id = c.get("jwtPayloadStudentId");
      console.log(id);
      const data = await AbsencesService.CountMyAbsences(id);
      return this.ok(c, "Successfuly count your absence.", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get all absence. ${error}`);
    }
  };

  getAll = async (c: Context) => {
    try {
      const query = AbsenceQuerySchema.parse(c.req.query());
      const data = await AbsencesService.findAllAbsence(query);
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
      if (!data) return this.notFound(c, "Absences not found.");

      return this.ok(c, "Successfuly get absence", data);
    } catch (error) {
      return this.badRequest(c, `Failed to get absence. ${error}`);
    }
  };

  UpdateByStudent = async (c: Context) => {
    try {
      const role: Role = c.get("jwtPayloadRole");

      const body = await c.req.json<{ status: Status }>();
      const idStudent = c.get("jwtPayloadStudentId");
      const idAbsence = c.req.param("id");
      const { status } = body;

      if (status === "unexcused") return this.badRequest(c, "Invalid action.");
      if (!status || !idAbsence)
        return this.badRequest(c, "Please insert status.");
      if (role !== "student")
        return this.badRequest(c, "This feature is supposed for student only!");

      // buat hari dan rangenya
      const { start, end } = getTodayRangeWIB();
      const time = getTimeWIB();

      // cek apaakah todo hari ini sudah ada dua
      const todo = await TodosService.findMyTodosToday(idStudent, start, end);
      const min2Todo = todo.length >= 2;
      if (!min2Todo && status === "present") {
        return this.badRequest(
          c,
          `You need ${2 - todo.length} To Do List for doing absences!`,
        );
      }

      // cek apakah hari ini sudah absen
      const absences = await AbsencesService.findByIdForMyAbsence(idAbsence);

      if (absences?.status !== "unexcused") {
        return this.badRequest(c, `You already absences today!`);
      }

      const data = {
        id: idStudent,
        status: status,
        absence_time: absences?.absence_time || getTimeWIB(),
      };

      const res = await AbsencesService.updateAbsenceByStudent(idAbsence, data);
      return this.ok(c, "Successfully create absence.", res);
    } catch (error) {
      return this.badRequest(c, `Failed to create absence. ${error}`);
    }
  };
}

export default AbsenController;
