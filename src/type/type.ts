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
