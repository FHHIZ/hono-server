import type { Role } from "../generated/prisma/index.js";

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
  password: string;
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
