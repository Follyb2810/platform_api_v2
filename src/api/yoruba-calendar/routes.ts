import { Router } from "express";
import { PrismaFestivalRepository } from "../../infrastructure/repositories/PrismaFestivalRepository";
// import { CreateFestivalUsecase } from "./usecases/CreateFestivalUsecase";
import { FestivalController } from "./controllers/festivalController";
import { CreateFestivalUsecase } from "../../application/usecases/CreateFestivalUsecase";
import authMiddleware from "../../middleware/auth.middleware";
// import { authMiddleware } from "../../auth/middleware/authMiddleware";

const router = Router();

const repo = new PrismaFestivalRepository();
const usecase = new CreateFestivalUsecase(repo);
const controller = new FestivalController(usecase);

router.post("/festivals", authMiddleware, (req, res) =>
  controller.create(req, res),
);

export default router;
