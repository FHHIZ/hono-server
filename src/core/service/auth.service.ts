import { prisma } from "../../middleware/client.js";
import type { UserUpdateRequest } from "../../type/type.js";

export const AuthService = {
  findByEmail: (email: string) => {
    return prisma.users.findUnique({
      where: { email },
      omit: {
        email_verified_at: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },

  findById: (data: string) => {
    return prisma.users.findUnique({
      where: { id: data },
      omit: {
        email_verified_at: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },

  findByIdForPassword: (data: string) => {
    return prisma.users.findUnique({
      where: { id: data },
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

  findByEmailForPassword: (data: string) => {
    return prisma.users.findUnique({
      where: { email: data },
      omit: {
        password: true,
        name: true,
        email_verified_at: true,
        createdAt: true,
        updatedAt: true,
      },
    });
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
            },
          }
        : undefined,
      omit: {
        email_verified_at: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },

  findOneUser: (id: string) => {
    return prisma.users.findMany({
      where: { id: id },
      omit: {
        email_verified_at: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },

  updatePassword: (id: string, body: { password: string }) => {
    return prisma.users.update({
      where: { id: id },
      data: body,
      omit: {
        email_verified_at: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },

  updateUser: (id: string, body: UserUpdateRequest) => {
    return prisma.users.update({
      where: { id: id },
      data: body,
      omit: {
        email_verified_at: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },
};
