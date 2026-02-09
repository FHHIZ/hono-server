import { prisma } from "../../middleware/client.js";
import type { ClassQuery, ClassType } from "../../type/type.js";

export const ClassService = {
  findById: (id: string) => {
    return prisma.class.findUnique({ where: { id: id } });
  },

  findAllClass: (query: ClassQuery) => {
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

  findOneClass: (id: string) => {
    return prisma.class.findMany({
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
                date: true,
              },
            },
          },
        },
      },
    });
  },

  createClass: (body: ClassType) => {
    return prisma.class.create({
      data: {
        classes: body.classes,
        major: body.major,
        academicYear: body.academicYear,
      },
    });
  },

  updateClass: (id: string, body: ClassType) => {
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
