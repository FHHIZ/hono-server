import { prisma } from "../../middleware/client.js";

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
};
