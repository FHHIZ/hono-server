import z from "zod";

export const StudentSchema = z.object({
  user_id: z.string({message: "Invalid user_id." }),
  class_id: z.email({ message: "Invalid class_id." }),
  nis: z.string().min(8, { message: "Nis length minimum is 8 characters" }),
});