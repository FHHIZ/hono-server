// strict, hanya disini password boleh di return

import type { Role } from "../../generated/prisma/index.js";
import { prisma } from "../../middleware/client.js";
import type { RegisterType } from "../../type/type.js";

export const AuthService = {
  // cari email di login, cari email di register
  FindCredentialByEmail: (email: string) => {
    return prisma.users.findUnique({
      where: { email: email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        student: { select: { id: true } },
      },
    });
  },

  // register akun baru
  Register: (body: RegisterType) => {
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
        name: true,
        email: true,
        role: true,
        slug: true,
        student: { select: { id: true } },
      },
    });
  },

  // authentikasi sebelum reset password
  VerifyUserForReset: (id: string) => {
    return prisma.users.findUnique({
      where: { id: id },
      select: { password: true },
    });
  },

  // reset password
  UpdateUserPassword: (id: string, body: { password: string }) => {
    return prisma.users.update({
      where: { id: id },
      data: { password: body.password },
      select: {},
    });
  },
};
