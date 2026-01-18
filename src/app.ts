import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { userRoutes } from "./auth/routes";
import morgan from "morgan";

export function createApp() {
  const app = express();
  app.use(morgan("tiny"));
  app.disable("x-powered-by");
  app.set("trust proxy", false);
  // app.set("trust proxy", 1);
  app.use(express.json());
  app.get("/health", (req: Request, res: Response) => {
    res.json({ status: "ok" });
  });
  // app.use("/auth", authRoutes);
  app.use("/api/", userRoutes);
  return app;
}
