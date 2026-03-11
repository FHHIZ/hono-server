import { prisma } from "../../middleware/client.js";
import type { EditMyProfileType, EditProfileType } from "../../type/type.js";

export const UserService = {
  IsUserExist: async (id: string) => {
    const count = await prisma.users.count({ where: { id: id } });
    return count > 0;
  },

  IsNameExist: async (name: string) => {
    const count = await prisma.users.count({ where: { name: name } });
    return count > 0;
  },

  IsEmailExist: async (email: string) => {
    const count = await prisma.users.count({ where: { email: email } });
    return count > 0;
  },

  IsSlugExist: async (slug: string) => {
    const count = await prisma.users.count({ where: { slug: slug } });
    return count > 0;
  },

  FindMyProfileSummaryById: (id: string) => {
    return prisma.users.findUnique({
      where: { id: id },
      select: {
        id: true,
        name: true,
        role: true,
        email: true,
        slug: true,
        student: {
          select: {
            id: true,
            class: {
              select: {
                id: true,
                academicYear: true,
                major: true,
                classNumber: true,
              },
            },
          },
        },
      },
    });
  },

  FindAllProfileSummaryWithQuery: (query?: string) => {
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
        student: { select: { nis: true } },
      },
    });
  },

  FindOneProfileDetailByIdOrSlug: (param: string) => {
    return prisma.users.findFirst({
      where: {
        OR: [{ id: param }, { slug: param }],
      },
      select: {
        name: true,
        role: true,
        student: {
          select: {
            nis: true,
            absences: {
              where: {
                absence_date: new Date(), // Hanya ambil absen hari ini
              },
              select: {
                absence_time: true,
                status: true,
              },
            },
          },
        },
      },
    });
  },

  UpdateMyProfile: (id: string, body: EditMyProfileType) => {
    return prisma.users.update({
      where: { id: id },
      data: { name: body.name, email: body.email, slug: body.slug },
      select: {
        id: true,
        name: true,
        email: true,
        slug: true,
      },
    });
  },

  UpdateProfile: (id: string, body: EditProfileType) => {
    return prisma.users.update({
      where: { id: id },
      data: { name: body.name, email: body.email, slug: body.slug },
      select: {
        id: true,
        name: true,
        email: true,
        slug: true,
      },
    });
  },
};
