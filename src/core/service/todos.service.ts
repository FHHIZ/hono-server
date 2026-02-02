import { prisma } from "../../middleware/client.js";

export const TodosService = {
  findAllTodos: (start?: Date, end?: Date) => {
    return prisma.todo_lists.findMany({
      where:
        start && end
          ? {
              date: {
                gte: start,
                lte: end,
              },
            }
          : undefined,
    });
  },

  FindOneTodos: (id?: string) => {
    return prisma.todo_lists.findMany({
      where: id
        ? {
            id: id,
          }
        : undefined,
    });
  },



  // findByEmail: (email: string) => {
  // return prisma.todo_lists.findUnique({ where: { email } });
  // },
  //
  // findById: (data: string) => {
  // return prisma.todo_lists.findUnique({ where: { id: data } });
  // },
  //
  // register: (data: { name: string; email: string; password: string }) => {
  // return prisma.todo_lists.create({ data });
  // },
  //
  // findAllUser: (query?: string) => {
  // return prisma.todo_lists.findMany({
  // where: query
  // ? {
  // name: {
  // contains: query,
  // }
  // }
  // : undefined,
  // omit: { password: true, createdAt: true, updatedAt: true, email_verified_at: true}
  // })
  // },
  //
  // findOneUser: (id: string) => {
  // return prisma.todo_lists.findMany({
  // where: { id: id },
  // omit: { password: true, createdAt: true, updatedAt: true, email_verified_at: true}
  // })
  // },
  //
  // updateUser: (id: string, body: updateRequest) => {
  // return prisma.todo_lists.update({
  // where: {id: id},
  // data: body,
  // omit: { password: true, createdAt: true, updatedAt: true, email_verified_at: true}
  // })
};
