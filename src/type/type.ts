import { ClassGrade, Status, type Role } from "../generated/prisma/index.js";

export type Token = {
  aud: string;
  exp: string;
  iat: string;
  iss: string;
  nbf: string;
  id: string;
  role: string;
};

export type AbsenceQuery = {
  date_start?: Date;
  date_end?: Date;
  classes?: ClassGrade;
  major?: string;
  status?: Status;
  has_todo?: boolean;
};

export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  name: string;
  email: string;
  password: string;
  role?: string;
};

export type resetPasswordType = {
  newPassword: string;
};

export type ResetType = {
  id: string;
  exp: number;
};

export type UserUpdateType = {
  name: string;
  email: string;
  role: Role;
};

export type TodosType = {
  student_id: string;
  activity: string;
};

export type ClassType = {
  classes: ClassGrade;
  major: string;
  academicYear: string;
};

export type ClassQuery = {
  class?: ClassGrade;
  major?: string;
  academic_year?: string;
};

export type AbsenceType = {
  student_id: string;
  status: Status;
  has_todo?: boolean;
};

export type StudentType = {
  user_id: string;
  class_id: string;
  nis: number;
};
