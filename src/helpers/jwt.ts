import { sign, verify } from "hono/jwt";
const accessjwt = process.env.ACCESS_SECRET!;
const refreshjwt = process.env.REFRESH_SECRET!;
const restartjwt = process.env.REFRESH_SECRET!;

export const generateTokens = async (user: {
  id: string;
  role: string;
  studentId?: string;
}) => {
  const accessToken = await sign(
    {
      id: user.id,
      role: user.role,
      studentId: user.studentId,
      exp: Math.floor(Date.now() / 1000) + 60 * 15, // 15 menit
    },
    accessjwt,
  );

  const refreshToken = await sign(
    {
      id: user.id,
      role: user.role,
      studentId: user.studentId,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 hari
    },
    refreshjwt,
  );

  const tempToken = await sign(
    {
      id: user.id,
      role: user.role,
      studentId: user.studentId,
      exp: Math.floor(Date.now() / 1000) + 60 * 10, // 10 menit
    },
    restartjwt,
  );

  return { accessToken, refreshToken, tempToken };
};

export async function accessSession(token: string) {
  const data = (await verify(token, accessjwt, "HS256")) as {
    id: string;
    role: string;
    studentId: string;
  };
  return { data };
}

export async function refreshSession(token: string) {
  const data = (await verify(token, refreshjwt, "HS256")) as {
    id: string;
    role: string;
    studentId: string;
  };

  const { accessToken, refreshToken } = await generateTokens({
    id: data.id,
    role: data.role,
    studentId: data.studentId,
  });

  return { accessToken, refreshToken };
}

export async function resetSession(token: string) {
  const data = (await verify(token, restartjwt, "HS256")) as {
    id: string;
    role: string;
    studentId: string;
  };

  return { id: data.id };
}
