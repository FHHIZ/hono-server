import type { Context, Next } from "hono";
import BaseController from "../base/controller.base.js";

const res = new BaseController();

export const DateHelpers = () => {
  const ConvertDatetoWib = () => {
    const now = new Date();
    const dateOnly = now.toLocaleDateString("en-CA", {
      timeZone: "Asia/Jakarta",
    });

    const displayDateTime = now.toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      dateStyle: "full",
      timeStyle: "long",
    });

    const displayClock = now.toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      timeStyle: "short", // Hanya menampilkan jam & menit (misal: 09.54)
    });

    return {
      date: dateOnly, // Contoh Hasil: "2026-03-09"
      clock: displayClock,
      fullDate: displayDateTime, // Contoh Hasil: "Senin, 9 Maret 2026 pukul 07.17.18 WIB"
    };
  };

  const GetTimeRangeWib = () => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 9);
    
    return { start, end };
  };

  const BlockRequestOnWeekend = () => {
    return async function abc(c: Context, next: Next) {
      const day = new Date().getDay();
      const isDay = [
        "minggu",
        "senin",
        "selasa",
        "rabu",
        "kamis",
        "jumat",
        "sabtu",
      ][day];
      if (day === 0 || day === 6)
        return res.ServiceUnavailable(
          c,
          `Requests cannot be processed during weekends. Today is ${isDay}.`,
        );
      else await next();
    };
  };

  const CheckIsLate = (limitTime: string = "07:15") => {
    const { clock } = ConvertDatetoWib();
    return clock > limitTime;
  };

  return {
    ConvertDatetoWib,
    GetTimeRangeWib,
    BlockRequestOnWeekend,
    CheckIsLate,
  };
};
