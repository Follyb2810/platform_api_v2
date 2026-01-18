import { Request, Response } from "express";
import {
  LoginUserDTO,
  LoginUserUsecase,
} from "../../core/usecases/LoginUserUsecase";
import { loginSchema } from "../validation/userValidation";

export class LoginController {
  constructor(private loginUsecase: LoginUserUsecase) {}

  async login(req: Request, res: Response) {
    try {
      const data: LoginUserDTO = loginSchema.parse(req.body);
      const user = await this.loginUsecase.execute(data);
      res.status(200).json({ message: "Login successful", user });
    } catch (err: any) {
      res.status(401).json({ error: err.message });
    }
  }
}
