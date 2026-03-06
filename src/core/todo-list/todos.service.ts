import { prisma } from "../../middleware/client.js";
import type { CreateTodosType } from "../../type/type.js";

export const TodosService = {
  findMyTodosToday: (id: string, start: Date, end: Date) => {
    return prisma.todoList.findMany({
      where: {
        student_id: id,
        createdAt: { gte: start, lte: end },
      },
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

  CreateTodos: (body: CreateTodosType) => {
    return prisma.todoList.create({
      data: {
        student_id: body.student_id,
        activity: body.activity,
      },
    });
  },
};
