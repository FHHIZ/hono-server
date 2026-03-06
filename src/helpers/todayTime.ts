export const getTimeWIB = () => {
  const now = new Date();

  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const wibTime = new Date(utc + 3600000 * 7);

  return wibTime;
};

export const getTodayRangeWIB = () => {
  const now = new Date();

  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const wibTime = new Date(utc + 3600000 * 7);

  const start = new Date(wibTime);
  start.setHours(0, 0, 0, 0);

  const end = new Date(wibTime);
  end.setHours(23, 59, 59, 999);

  return { start, end };
};
