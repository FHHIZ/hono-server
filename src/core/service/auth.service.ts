import { prisma } from "../../middleware/client.js";
import type { updateRequest } from "../../type/type.js";

export const AuthService = {
  findByEmail: (email: string) => {
    return prisma.users.findUnique({ where: { email } });
  },

  findById: (data: string) => {
    return prisma.users.findUnique({ where: { id: data } });
  },

  register: (data: { name: string; email: string; password: string }) => {
    return prisma.users.create({ data });
  },

  findAllUser: (query?: string) => {
    return prisma.users.findMany({
      where: query
        ? {
            name: {
              contains: query,
            }
          }
        : undefined,
      omit: { password: true, createdAt: true, updatedAt: true, email_verified_at: true}
    })
  },

    findOneUser: (id: string) => {
    return prisma.users.findMany({
      where: { id: id },
      omit: { password: true, createdAt: true, updatedAt: true, email_verified_at: true}
    })
  },

  updateUser: (id: string, body: updateRequest) => {
    return prisma.users.update({
      where: {id: id},
      data: body,
      omit: { password: true, createdAt: true, updatedAt: true, email_verified_at: true}
    })
  },
};
