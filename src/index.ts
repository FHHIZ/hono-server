import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { Routes } from "./router/route.js";
import { cors } from "hono/cors";

const app = new Hono();

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
    port: 9000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
