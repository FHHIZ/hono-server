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
        classNumber: body.classNumber,
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
              { classNumber: query.classNumber },
              { major: query.major },
              { academicYear: query.academicYear },
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
        academicYear: true,
        major: true,
        classNumber: true,
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
        academicYear: body.academicYear,
        major: body.major,
        classNumber: body.classNumber,
      },
    });
  },

  UpdateClass: (id: string, body: ClassType) => {
    return prisma.class.update({
      where: { id: id },
      data: {
        academicYear: body.academicYear,
        major: body.major,
        classNumber: body.classNumber
      },

      omit: { createdAt: true, updatedAt: true },
    });
  },
};
