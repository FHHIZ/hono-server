import type { Role } from "../../generated/prisma/index.js";
import { DateHelpers } from "../../helpers/dateWIB.js";
import { prisma } from "../../middleware/client.js";
import type { CreateTodosType, TodosType } from "../../type/type.js";

const { GetTimeRangeWib } = DateHelpers();
const { start, end } = GetTimeRangeWib();
export const TodosService = {
  IsTodoExist: (id: string) => {
    return prisma.todoList.count({
      where: { id: id },
    });
  },

  WhoIsOwnerOfTodo: async (AbsenceId: string, StudentId: string) => {
    const owner = await prisma.todoList.findUnique({
      where: { id: AbsenceId },
      select: { absences: { select: { student_id: true } } },
    });
    if (!owner) return false;
    return owner?.absences.student_id === StudentId ? 1 : 2;
  },

  FindMyTodosToday: (id: string) => {
    return prisma.todoList.findMany({
      where: {
        absences: { student_id: id },
        createdAt: { gte: start, lte: end },
      },
      select: {
        id: true,
        activity: true,
        description: true,
        deadline: true,
        done: true,
        createdAt: true,
      },
    });
  },

  FindAllTodosWithQuery: (start?: Date, end?: Date, id?: string) => {
    return prisma.todoList.findMany({
      where: {
        absences: { student_id: id },
        createdAt: { gte: start, lte: end },
      },
      select: {
        id: true,
        activity: true,
      },
    });
  },

  FindOneTodosById: (id: string) => {
    return prisma.todoList.findUnique({
      where: { id: id },
      select: {
        id: true,
        activity: true,
        description: true,
        deadline: true,
        done: true,
        createdAt: true,
      },
    });
  },

  Create: (body: CreateTodosType) => {
    return prisma.todoList.create({
      data: {
        absence_id: body.absence_id,
        activity: body.activity,
      },
      select: {
        id: true,
        activity: true,
        description: true,
        deadline: true,
        done: true,
        createdAt: true,
      },
    });
  },

  Update: async (id: string, data: TodosType) => {
    return prisma.todoList.update({
      where: { id: id },
      data: {
        activity: data.activity,
        description: data.description,
        deadline: data.deadline,
      },
      select: {
        id: true,
        activity: true,
        description: true,
        deadline: true,
        done: true,
        createdAt: true,
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
      data: { done: !isDone?.done },
      select: { id: true, done: true },
    });
  },

  Delete: (id: string) => {
    return prisma.todoList.delete({
      where: { id: id },
    });
  },
};
