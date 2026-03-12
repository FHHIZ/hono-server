import type { AttendanceStatus } from "../../generated/prisma/index.js";
import { DateHelpers } from "../../helpers/dateWIB.js";
import { prisma } from "../../middleware/client.js";
import type {
  AbsenceQuery,
  CreateManyAbsenceType,
  UpdateAbsenceTypeByAdmin,
} from "../../type/type.js";

const { GetTimeRangeWib } = DateHelpers();
const { start, end } = GetTimeRangeWib();

export const AbsencesService = {
  GetPendingAbsence: async (id: string) => {
    const data = await prisma.absence.findUnique({
      where: {
        id: id,
        OR: [{ status: "ABSENT" }, { status: "RESUBMIT" }],
      },
      select: { status: true },
    });
    return data?.status;
  },

  FindMyAbsenceToday: (id: string) => {
    return prisma.absence.findFirst({
      where: {
        student_id: id,
        absence_date: { lte: end },
      },
      select: {
        id: true,
        status: true,
        absence_time: true,
        teacher_note: true,
      },
    });
  },

  CountMyAbsences: (id: string) => {
    return prisma.absence.groupBy({
      where: { student_id: id },
      by: ["status"],
      _count: {
        status: true,
      },
    });
  },

  FindAllAbsenceSummaryWithQuery: (query: AbsenceQuery) => {
    return prisma.absence.findMany({
      where: {
        student: {
          class: { major: query.major, classNumber: query.classNumber },
        },
        absence_date: { gte: query.date_start, lte: query.date_end },
      },
      select: {
        id: true,
        status: true,
        has_todo: true,
        absence_time: true,
        student: {
          select: {
            user: { select: { name: true } },
            class: {
              select: { academicYear: true, major: true, classNumber: true },
            },
          },
        },
      },
    });
  },

  FindOneAbsenceDetailById: (id: string) => {
    return prisma.absence.findUnique({
      where: { id: id },
      select: {
        id: true,
        status: true,
        has_todo: true,
        absence_time: true,
        student: {
          select: {
            user: { select: { name: true } },
            class: { select: { academicYear: true, major: true } },
          },
        },
      },
    });
  },

  IsInitialAbsencesExistToday: async () => {
    const count = await prisma.absence.count({
      where: {
        absence_date: { lte: end },
      },
    });
    return count > 0;
  },

  CreateManyInitialAbsences: (data: CreateManyAbsenceType[]) => {
    return prisma.absence.createMany({
      data: data,
      skipDuplicates: true,
    });
  },

  Create: (student_id: string) => {
    return prisma.absence.create({
      data: {
        student_id: student_id,
        status: "ABSENT",
        absence_date: start,
        absence_time: start,
        has_todo: false,
      },
      select: {},
    });
  },

  UpdateAbsenceByStudent: (
    id: string,
    beforeStatus: AttendanceStatus,
    afterStatus: AttendanceStatus,
  ) => {
    return prisma.absence.update({
      where: { id: id },
      data: {
        status: afterStatus,
        absence_time: beforeStatus == "RESUBMIT" ? undefined : new Date(),
        has_todo: true,
      },
      select: {
        id: true,
        status: true,
        has_todo: true,
        absence_time: true,
        student: { select: { user: { select: { name: true } } } },
      },
    });
  },

  UpdateAbsence: (id: string, data: UpdateAbsenceTypeByAdmin) => {
    return prisma.absence.update({
      where: { id: id },
      data: {
        status: data.status,
        absence_time: data.absence_time,
        has_todo: data.status === "PRESENT" ? true : false,
        teacher_note: data.teacher_note,
      },
      select: {
        id: true,
        status: true,
        has_todo: true,
        absence_time: true,
        student: { select: { user: { select: { name: true } } } },
      },
    });
  },
};
