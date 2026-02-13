import z from "zod";
import { ClassGrade, Status } from "../generated/prisma/index.js";

export const AbsenceQuerySchema = z.object({
  date_start: z.coerce.date().optional(),
  date_end: z.coerce.date().optional(),
  classes: z.enum(ClassGrade).optional(),
  major: z.string().optional(),
  status: z.enum(Status).optional(),
  has_todo: z.preprocess((val) => val === "true", z.boolean()).optional(),
});
