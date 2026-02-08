import { prisma } from "../../middleware/client.js";
import type { updateClass } from "../../type/type.js";

export const ClassService = {
  findById: (data: string) => {
    return prisma.classes.findUnique({ where: { id: data } });
  },

  createClass: (data: { className: string; academicYear: string }) => {
    return prisma.classes.create({ data });
  },

  findAllClass: (query?: string) => {
    return prisma.classes.findMany({
      where: query
        ? {
            className: {
              contains: query,
            },
          }
        : undefined,
      omit: { createdAt: true, updatedAt: true },
    });
  },

  findOneClass: (id: string) => {
    return prisma.classes.findMany({
      where: { id: id },

      omit: { createdAt: true, updatedAt: true },
    });
  },

  updateClass: (id: string, body: updateClass) => {
    return prisma.classes.update({
      where: { id: id },
      data: body,

      omit: { createdAt: true, updatedAt: true },
    });
  },
};
