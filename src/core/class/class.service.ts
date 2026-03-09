import { prisma } from "../../middleware/client.js";
import type { ClassQuery, ClassType } from "../../type/type.js";

export const ClassService = {
  IsClassExist: async (id: string) => {
    const count = await prisma.class.count({ where: { id: id } });
    return count > 0;
  },

  FindClassMatch: async (body: ClassType) => {
    const count = await prisma.class.count({
      where: {
        classes: body.classes,
        major: body.major,
        academicYear: body.academicYear,
      },
    });
    return count > 0;
  },

  FindAllClassSummaryWithId: (query: ClassQuery) => {
    return prisma.class.findMany({
      where: query
        ? {
            AND: [
              { classes: query.class },
              { major: query.major },
              { academicYear: query.academic_year },
            ],
          }
        : undefined,
      omit: { createdAt: true, updatedAt: true },
    });
  },

  FindOneClassDetailWithId: (id: string) => {
    return prisma.class.findUnique({
      where: { id: id },
      select: {
        classes: true,
        major: true,
        academicYear: true,
        student: {
          select: {
            nis: true,
            user: {
              select: {
                name: true,
              },
            },
            absences: {
              select: {
                status: true,
                absence_time: true,
              },
            },
          },
        },
      },
    });
  },

  CreateClass: (body: ClassType) => {
    return prisma.class.create({
      data: {
        classes: body.classes,
        major: body.major,
        academicYear: body.academicYear,
      },
    });
  },

  UpdateClass: (id: string, body: ClassType) => {
    return prisma.class.update({
      where: { id: id },
      data: {
        classes: body.classes,
        major: body.major,
        academicYear: body.academicYear,
      },

      omit: { createdAt: true, updatedAt: true },
    });
  },
};
