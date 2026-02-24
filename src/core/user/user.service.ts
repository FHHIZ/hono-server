import { string } from "zod";
import { prisma } from "../../middleware/client.js";
import type { UserUpdateType } from "../../type/type.js";

export const UserService = {
  findByEmail: (email: string) => {
    return prisma.users.findUnique({
      where: { email: email },
      omit: {
        email_verified_at: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },

  findByName: (name: string) => {
    return prisma.users.findUnique({
      where: { name: name },
      omit: {
        email_verified_at: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },

  findById: (id: string) => {
    return prisma.users.findUnique({
      where: { id: id },
      select: {
        id: true,
        name: true,
        role: true,
        email: true,
        student: {
          select: {
            id: true,
            class: { select: { id: true, classes: true, major: true } },
          },
        },
      },
    });
  },

  findAllUser: (query?: string) => {
    return prisma.users.findMany({
      where: query
        ? {
            name: {
              contains: query,
            },
          }
        : undefined,
      select: {
        id: true,
        name: true,
        role: true,
        email: true,
        student: { select: { nis: true } },
      },
    });
  },

  findOneUser: (id: string) => {
    return prisma.users.findUnique({
      where: { id: id },
      select: {
        name: true,
        student: {
          select: {
            nis: true,
            absences: {
              select: {
                absence_time: true,
                status: true,
                has_todo: true,
              },
            },
          },
        },
      },
    });
  },

  updateUser: (id: string, body: UserUpdateType) => {
    return prisma.users.update({
      where: { id: id },
      data: { name: body.name, email: body.email, role: body.role },
      omit: {
        email_verified_at: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },
};
