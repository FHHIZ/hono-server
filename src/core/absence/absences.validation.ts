import z from "zod";
import { AttendanceStatus } from "../../generated/prisma/index.js";

export const RejectSchema = z.object({
  teacher_note: z.string().optional(),
});

export const AbsenceSchema = z.object({
  status: z.enum(AttendanceStatus).optional(),
  has_todo: z.boolean().optional(),
  teacher_note: z.string().optional(),
  absence_time: z.date().optional(),
});
