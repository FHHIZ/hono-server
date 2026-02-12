import type { Status } from "../../generated/prisma/index.js";
import { prisma } from "../../middleware/client.js";
import type { AbsenceType } from "../../type/type.js";

export const AbsencesService = {
  findById: (id: string) => {
    return prisma.absence.findUnique({
      where: { id: id },
      select: {
        id: true,
      },
    });
  },

  findAllAbsence: (query?: Status | undefined) => {
    return prisma.absence.findMany({
      where: query
        ? {
            status: {
              equals: query,
            },
          }
        : undefined,
      select: {
        id: true,
        status: true,
        has_todo: true,
        absence_time: true,
        student: { select: { user: { select: { name: true } } } },
      },  
    });
  },

  createAbsence: (body: AbsenceType) => {
    return prisma.absence.create({
      data: {
        student_class_id: body.student_id,
        status: body.status,
        has_todo: body.has_todo || undefined,
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

  findOneAbsence: (id: string) => {
    return prisma.absence.findMany({
      where: { id: id },
    });
  },

  updateAbsence: (id: string, body: AbsenceType) => {
    return prisma.absence.update({
      where: { id: id },
      data: {
        student_class_id: body.student_id,
        status: body.status,
        has_todo: body.has_todo || undefined,
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
