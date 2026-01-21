import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { userRoutes } from "./auth/routes";
import morgan from "morgan";
import { errorMiddleware } from "./middleware/error.middleware";

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
  app.post("/health_v2", (req: Request, res: Response) => {
    res.json({ status: req.body });
  });
  // app.use("/auth", authRoutes);
  app.use("/api", userRoutes);
  app.use(errorMiddleware);
  return app;
}
