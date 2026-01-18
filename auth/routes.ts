import { Router } from "express";
import { me } from "./controllers/authController";
import { PrismaUserRepository } from "../infrastructure/repositories/PrismaUserRepository";
import { CreateUserUsecase } from "../core/usecases/CreateUserUsecase";
import { UserController } from "./controllers/userController";
import { LoginUserUsecase } from "../core/usecases/LoginUserUsecase";
import { LoginController } from "./controllers/loginController";
const router = Router();

const userRepo = new PrismaUserRepository();

const createUserUsecase = new CreateUserUsecase(userRepo);
const controller = new UserController(createUserUsecase);

const loginUsecase = new LoginUserUsecase(userRepo);
const loginController = new LoginController(loginUsecase);

router.post("/login", (req, res) => loginController.login(req, res));
router.get("/me", me);
router.post("/users", (req, res) => controller.create(req, res));

export const userRoutes = router;

// export const authRoutes = router;
/**
 * GET /api/yoruba-calendar/festivals
POST /api/yoruba-calendar/festivals
GET /api/ticketing/tickets
POST /api/ticketing/tickets
GET /api/tax-flow/invoices
POST /api/tax-flow/payments

 */
