import {
  ClassGrade,
  AttendanceStatus,
  type Role,
} from "../generated/prisma/index.js";

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
  student_id?: string;
  date_start?: Date;
  date_end?: Date;
  classes?: ClassGrade;
  major?: string;
  status?: AttendanceStatus;
  has_todo?: boolean;
};

export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  name: string;
  slug: string;
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

export type EditMyProfileType = {
  name: string;
  email: string;
  slug: string;
};

export type EditProfileType = {
  name: string;
  email: string;
  slug: string;
  role: Role;
};

export type TodosType = {
  activity: string;
};

export type CreateTodosType = {
  absence_id: string;
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

export type CreateManyAbsenceType = {
  student_id: string;
  absence_time: any;
  absence_date: any;
};

export type UpdateAbsenceType = {
  status: AttendanceStatus;
};

export type UpdateAbsenceTypeByAdmin = {
  status?: AttendanceStatus;
  has_todo?: boolean;
  teacher_note?: string;
  absence_time?: Date;
};

export type StudentType = {
  user_id: string;
  class_id: string;
  nis: string;
};
