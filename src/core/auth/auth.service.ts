import type { Role } from "../../generated/prisma/index.js";
import { prisma } from "../../middleware/client.js";
import type { RegisterType } from "../../type/type.js";

export const AuthService = {
  findByIdForPassword: (id: string) => {
    return prisma.users.findUnique({
      where: { id: id },
      omit: {
        id: true,
        name: true,
        role: true,
        email: true,
        email_verified_at: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },

  register: (body: RegisterType) => {
    return prisma.users.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
        slug: body.slug,
        role: body.role as Role,
      },
      select: {
        id: true,
        role: true,
        password: true,
        student: { select: { id: true } },
      },
    });
  },

  updatePassword: (id: string, body: { password: string }) => {
    return prisma.users.update({
      where: { id: id },
      data: { password: body.password },
      omit: {
        email_verified_at: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },
};
