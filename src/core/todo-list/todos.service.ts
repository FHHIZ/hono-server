import { prisma } from "../../middleware/client.js";
import type { TodosType } from "../../type/type.js";

export const TodosService = {
  findAllTodos: (start?: Date, end?: Date) => {
    return prisma.todoList.findMany({
      where:
        start && end
          ? {
              createdAt: {
                gte: start,
                lte: end,
              },
            }
          : undefined,
      select: {
        id: true,
        activity: true,
        createdAt: true,
        student: {
          select: {
            class: {
              select: { classes: true, major: true, academicYear: true },
            },
            user: { select: { id: true, name: true } },
          },
        },
      },
    });
  },

  FindOneTodos: (id: string) => {
    return prisma.todoList.findUnique({
      where: { id: id },
      select: {
        id: true,
        activity: true,
        createdAt: true,
        student: { select: { user: true } },
      },
    });
  },

  CreateTodos: (body: TodosType) => {
    return prisma.todoList.create({
      data: {
        student_class_id: body.student_id,
        activity: body.activity,
      },
    });
  },

  UpdateTodos: (id: string, body: TodosType) => {
    return prisma.todoList.update({
      where: { id: id },
      data: {
        student_class_id: body.student_id,
        activity: body.activity,
      },
    });
  },
};
