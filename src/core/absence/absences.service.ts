import { prisma } from "../../middleware/client.js";
import type {
  AbsenceQuery,
  CreateManyAbsenceType,
  UpdateAbsenceType,
} from "../../type/type.js";

export const AbsencesService = {
  checkAbsenceToday: (start: Date, end: Date) => {
    return prisma.absence.findFirst({
      where: {
        absence_time: { gte: start, lte: end },
      },
      select: {
        id: true,
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

  findByIdForAbsences: (id: string) => {
    return prisma.absence.findUnique({
      where: { id: id },
      select: {
        has_todo: true,
      },
    });
  },

  findMyAbsenceToday: (id: string, start: Date, end: Date) => {
    return prisma.absence.findFirst({
      where: {
        student_id: id,
        absence_time: { gte: start, lte: end },
      },
      select: {
        status: true,
        absence_time: true,
        description: true,
      },
    });
  },

  findByIdForMyAbsence: (id: string) => {
    return prisma.absence.findFirst({
      where: {
        id: id,
      },
      select: {
        status: true,
        absence_time: true,
        description: true,
      },
    });
  },

  findAllAbsence: (query: AbsenceQuery) => {
    return prisma.absence.findMany({
      where: !query.student_id
        ? {
            student: {
              class: {
                classes: query.classes || undefined,
                major: query.major || undefined,
              },
            },
            absence_time: {
              gte: query.date_start || undefined,
              lte: query.date_end || undefined,
            },
            status: query.status || undefined,
            has_todo: query.has_todo || undefined,
          }
        : { student_id: query.student_id },
      select: {
        id: true,
        status: true,
        has_todo: true,
        absence_time: true,
        student: {
          select: {
            user: { select: { name: true } },
            class: { select: { classes: true, major: true } },
          },
        },
      },
    });
  },

  findOneAbsence: (id: string) => {
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
            class: { select: { classes: true, major: true } },
          },
        },
      },
    });
  },

  createMany: (data: CreateManyAbsenceType[]) => {
    return prisma.absence.createMany({
      data: data,
      skipDuplicates: true,
    });
  },

  updateAbsenceByStudent: (id: string, data: UpdateAbsenceType) => {
    return prisma.absence.update({
      where: { id: id },
      data: {
        status: data.status,
        absence_time: data.absence_time,
        has_todo: data.status === "present" ? true : false,
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

  //   resubmitedAbsenceByStudent: (id: string, body: AbsenceType) => {
  //     return prisma.absence.update({
  //       where: { id: id },
  //       data: {
  //         student_id: body.student_id,
  //         status: body.status,
  //         has_todo: body.status === "present" ? true : false,
  //       },
  //       select: {
  //         id: true,
  //         status: true,
  //         has_todo: true,
  //         absence_time: true,
  //         student: { select: { user: { select: { name: true } } } },
  //       },
  //     });
  //   },
};
