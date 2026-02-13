import { prisma } from "../../middleware/client.js";
import type { StudentType } from "../../type/type.js";

export const StudentService = {
  findById: (id: string) => {
    return prisma.student.findUnique({ where: { id: id } });
  },

  createStudent: (body: StudentType) => {
    return prisma.student.create({
      data: { user_id: body.user_id, class_id: body.class_id, nis: body.nis },
    });
  },

  findAllStudent: (query?: string) => {
    return prisma.student.findMany({
      where: query
        ? {
            user: {
              name: {
                contains: query,
              },
            },
          }
        : undefined,
      omit: { createdAt: true, updatedAt: true },
    });
  },

  findOneStudent: (id: string) => {
    return prisma.student.findMany({
      where: { id: id },

      omit: { createdAt: true, updatedAt: true },
    });
  },

  updateStudent: (id: string, body: StudentType) => {
    return prisma.student.update({
      where: { id: id },
      data: { user_id: body.user_id, class_id: body.class_id, nis: body.nis },
      omit: { createdAt: true, updatedAt: true },
    });
  },
};
