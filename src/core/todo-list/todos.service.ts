import { DateHelpers } from "../../helpers/dateWIB.js";
import { prisma } from "../../middleware/client.js";
import type { CreateTodosType } from "../../type/type.js";

const { GetTimeRangeWib } = DateHelpers();
const { start, end } = GetTimeRangeWib();
export const TodosService = {
  IsTodoExist: (id: string) => {
    return prisma.todoList.count({
      where: { id: id },
    });
  },

  FindMyTodosToday: (id: string) => {
    return prisma.absence.findFirst({
      where: {
        student_id: id,
        absence_date: { lte: end },
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

  FindAllTodosWithQuery: (date?: Date, student?: string) => {
    return prisma.absence.findMany({
      where: { absence_date: date, student_id: student },
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

  UpdateDone: async (id: string) => {
    const isDone = await prisma.todoList.findUnique({
      where: { id: id },
      select: { done: true },
    });
    return prisma.todoList.update({
      where: { id: id },
      data: { done: !isDone },
      select: { id: true, done: true }
    });
  },
};
