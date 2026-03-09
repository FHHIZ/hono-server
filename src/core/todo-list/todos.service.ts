import { DateHelpers } from "../../helpers/dateWIB.js";
import { prisma } from "../../middleware/client.js";
import type { CreateTodosType } from "../../type/type.js";

export const TodosService = {
  FindMyTodosToday: (id: string) => {
    return prisma.absence.findUnique({
      where: {
        id: id,
        absence_date: new Date(),
      },
      select: {
        has_todo: true,
        absence_date: true,
        todo_list: {
          select: {
            id: true,
            activity: true,
            createdAt: true,
          },
        },
      },
    });
  },

  FindAllTodosWithQuery: (now?: Date) => {
    return prisma.absence.findMany({
      where: { absence_date: now || undefined },
      select: {
        has_todo: true,
        absence_date: true,
        todo_list: {
          select: {
            id: true,
            activity: true,
            createdAt: true,
          },
        },
      },
    });
  },

  FindOneTodosById: (id: string) => {
    return prisma.absence.findUnique({
      where: { id: id },
      select: {
        has_todo: true,
        absence_date: true,
        todo_list: {
          select: {
            id: true,
            activity: true,
            createdAt: true,
          },
        },
      },
    });
  },

  Create: (body: CreateTodosType) => {
    return prisma.todoList.create({
      data: {
        absence_id: body.absence_id,
        activity: body.activity,
      },
    });
  },
};
