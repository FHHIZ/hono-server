import { DateHelpers } from "../../helpers/dateWIB.js";
import { prisma } from "../../middleware/client.js";
import type { StudentType } from "../../type/type.js";

const { GetTimeRangeWib } = DateHelpers();
const { end } = GetTimeRangeWib();

export const StudentService = {
  IsStudentExist: async (id: string) => {
    const count = await prisma.student.count({ where: { id: id } });
    return count > 0;
  },

  FindActiveStudentAccounts: async () => {
    const data = await prisma.users.findMany({
      where: { role: "STUDENT", student: { isNot: null } },
      select: { student: { select: { id: true } } },
    });
    return data;
  },

  FindAllStudentSummaryWithQuery: (query?: string) => {
    return prisma.student.findMany({
      where: query
        ? {
            user: {
              name: {
                contains: query,
              },
            },
          }
        : undefined,
      select: {
        id: true,
        nis: true,
        class: {
          select: { academicYear: true, major: true, classNumber: true },
        },
        user: { select: { name: true, email: true } },
      },
    });
  },

  FindOneStudentDetailWithId: (id: string) => {
    return prisma.student.findUnique({
      where: { id: id },
      select: {
        id: true,
        nis: true,
        class: {
          select: { academicYear: true, major: true, classNumber: true },
        },
        user: { select: { name: true, email: true } },
        absences: {
          where: {
            absence_date: { lte: end }, // Hanya ambil absen hari ini
          },
          select: {
            absence_time: true,
            status: true,
          },
        },
      },
    });
  },

  CreateStudent: (body: StudentType) => {
    return prisma.student.create({
      data: { user_id: body.user_id, class_id: body.class_id, nis: body.nis },
      select: {
        id: true,
        nis: true,
        user: { select: { name: true } },
        class: {
          select: { academicYear: true, major: true, classNumber: true },
        },
        absences: {
          where: { absence_date: { lte: end } },
          select: { status: true },
        },
      },
    });
  },

  UpdateStudent: (id: string, body: StudentType) => {
    return prisma.student.update({
      where: { id: id },
      data: { user_id: body.user_id, class_id: body.class_id, nis: body.nis },
      select: {
        id: true,
        nis: true,
        user: { select: { name: true } },
        class: {
          select: { academicYear: true, major: true, classNumber: true },
        },
      },
    });
  },
};
