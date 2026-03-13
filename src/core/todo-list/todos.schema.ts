import z from "zod";

export const TodoSchema = z.object({
  activity: z.string(),
});