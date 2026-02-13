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
    });
  },

  FindOneTodos: (id?: string) => {
    return prisma.todoList.findMany({
      where: id
        ? {
            id: id,
          }
        : undefined,
    });
  },

  CreateTodos: (body: TodosType) => {
    return prisma.todoList.create({
      data: {
        student_class_id: body.student_class_id,
        activity: body.activity,
      },
    });
  },

  UpdateTodos: (id: string, body: TodosType) => {
    return prisma.todoList.update({
      where: { id: id },
      data: {
        student_class_id: body.student_class_id,
        activity: body.activity,
      },
    });
  },
};
