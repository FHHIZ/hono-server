import z from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, "Name length minimum is 3 characters"),
  email: z.email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "Password length minimum is 8 characters" }),
  slug: z.string().min(1, { message: "Please insert slugs." }),
  isAdmin: z.boolean().optional(),
});

export const RegisterStudentSchema = z
  .array(
    z.object({
      name: z.string().min(3, { message: "Name length minimum is 3 characters" }),
      email: z.email({ message: "Invalid email" }),
      password: z.string().min(8, { message: "Password length minimum is 8 characters" }),
      slug: z.string().min(1, { message: "Please insert slugs." }),
      classId: z.string({ message: "Please insert classId"}),
      nis: z.string().min(9, { message: "Nis length minimum is 9 characters" }),
    }),
  )
  .refine(
    (students) => {
      const emails = students.map((s) => s.email);
      return new Set(emails).size === emails.length;
    },
    {
      message: "There is a duplicate email in list.",
      path: [0],
    },
  )
  .refine(
    (slug) => {
      const slugs = slug.map((s) => s.slug);
      return new Set(slugs).size === slugs.length;
    },
    {
      message: "There is a duplicate slug in list.",
      path: [0],
    },
  )
  .refine(
    (nis) => {
      const Nis = nis.map((s) => s.nis);
      return new Set(Nis).size === Nis.length;
    },
    {
      message: "There is a duplicate nis in list.",
      path: [0],
    },
  );

export const VerifyBeforeResetPasswordSchema = z.object({
  oldPassword: z.string().min(8, { message: "Password length minimum is 8 characters" }),
});

export const ResetPasswordSchema = z.object({
  newPassword: z.string().min(8, { message: "Password length minimum is 8 characters" }),
});