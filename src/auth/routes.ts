import { Router } from "express";
import { me } from "./controllers/authController";
import { PrismaUserRepository } from "../infrastructure/repositories/PrismaUserRepository";
import { UserController } from "./controllers/userController";
import { LoginController } from "./controllers/loginController";
import { createUserSchema, EmailSchema } from "./validation/userValidation";
import {
  ValidateMiddleware,
  ValidateSource,
} from "../middleware/validation.middleware";
import { JwtTokenService } from "../infrastructure/auth/JwtTokenService";
import { CreateUserUsecase } from "../application/usecases/user/CreateUserUsecase";
import { LoginUserUsecase } from "../application/usecases/user/LoginUserUsecase";
const router = Router();

const userRepo = new PrismaUserRepository();
const token = new JwtTokenService("");
const createUserUsecase = new CreateUserUsecase(userRepo, token);
const registerController = new UserController(createUserUsecase);

const loginUsecase = new LoginUserUsecase(userRepo);
const loginController = new LoginController(loginUsecase);

router.get(
  "/user/:email",
  ValidateMiddleware(EmailSchema, ValidateSource.PARAMS),
  (req, res) => registerController.getUserByEmail(req, res),
);
router.post("/login", (req, res) => loginController.login(req, res));
router.get("/me", me);
router.post("/register", ValidateMiddleware(createUserSchema), (req, res) =>
  registerController.create(req, res),
);

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
