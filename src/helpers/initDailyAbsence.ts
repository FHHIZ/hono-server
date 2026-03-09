import cron from "node-cron";
import { generateDailyAbsence } from "./generateAttendance.js";

export function AutomaticGenerateAbsences() {
    generateDailyAbsence().catch((err) =>
      console.error("Failed to generate absences, ", err),
    );
    
    // menit 0, jam 3, tanggal *, bulan *, 0=minggu 1=senin 2=selasa dan seterusnya
    cron.schedule(
      "0 3 * * 1-5",
      () => {
        console.log("Generate absences every at 3 o`clock...");
        generateDailyAbsence();
      },
      {
        timezone: "Asia/Jakarta",
      },
    );
}