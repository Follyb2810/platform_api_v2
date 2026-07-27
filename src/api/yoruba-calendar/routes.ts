import { Router } from "express";
import { PrismaFestivalRepository } from "../../infrastructure/repositories/PrismaFestivalRepository";
import { FestivalController } from "./controllers/festivalController";
import { CreateFestivalUsecase } from "../../application/usecases/CreateFestivalUsecase";
import { JwtTokenService } from "../../infrastructure/auth/JwtTokenService";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

const tokenService = new JwtTokenService(process.env.JWT_SECRET!);
const repo = new PrismaFestivalRepository();
const usecase = new CreateFestivalUsecase(repo);
const controller = new FestivalController(usecase);

router.post("/festivals", authMiddleware(tokenService), (req, res) =>
  controller.create(req, res),
);

export default router;
