// strict, hanya disini password boleh di return

import { DateHelpers } from "../../helpers/dateWIB.js";
import { prisma } from "../../middleware/client.js";
import type { RegisterType } from "../../type/type.js";
const { GetTimeRangeWib } = DateHelpers();
const { end, start } = GetTimeRangeWib();

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
        role: body.isAdmin ? "ADMIN" : "TEACHER",
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

  // register akun baru
  RegisterMany: async (body: RegisterType[]) => {
    const count = await prisma.users.createMany({
      data: body,
      skipDuplicates: true,
    });
    const users = await prisma.users.findMany({
      where: { email: { in: body.map((e) => e.email) } },
      select: { id: true },
    });
    return { count: count.count, userIds: users };
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
