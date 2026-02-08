import { Status, type Role } from "../generated/prisma/index.js";

export type LoginBody = {
  email: string;
  password: string;
};

export type RegisterBody = {
  name: string;
  email: string;
  password: string;
};

export type token = {
  aud: string;
  exp: string;
  iat: string;
  iss: string;
  nbf: string;
  id: string;
  role: string;
};

export type resetPasswordRequest = {
  newPassword: string;
};

export type UserUpdateRequest = {
  name: string;
  email: string;
  role: Role;
};

export type todoCreateRequest = {
  activity: string;
  email: string;
  password: string;
  role: Role;
};

export type createClass = {
  className: string;
  academicYear: string;
};

export type updateClass = {
  className: string;
  academicYear: string;
};


export type createAbsen = {
  status: Status;
};

export type updateAbsen = {
  status: Status;
};
export type ResetPayload = {
  id: string;
  exp: number;
};
