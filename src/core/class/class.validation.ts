import z from "zod";

export const ClassSchema = z.object({
  major: z.string({ message: "Please insert major" }).min(3, "Major length minimum is 3 characters").max(4, "Major length maximum is 4 characters"),
  academicYear: z.string({ message: "Please insert academicYear" }).min(9, "Major length minimum is 9 characters").max(9, "Major length maximum is 9 characters"),
  classNumber: z.number({ message: "Please insert classNumber" })
});