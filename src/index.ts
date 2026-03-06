import { serve } from "@hono/node-server";
import { Hono } from "hono";
import cron from "node-cron";
import { Routes } from "./router/route.js";
import { cors } from "hono/cors";
import { generateDailyAbsence } from "./helpers/automatic.js";

const app = new Hono();

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

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
    credentials: true,
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "ngrok-skip-browser-warning",
    ],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    exposeHeaders: ["x-access-token"],
  }),
);

app.route("/api", Routes);
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 5000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
