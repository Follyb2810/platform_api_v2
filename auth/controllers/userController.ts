import { Request, Response } from "express";
import { CreateUserUsecase } from "../../core/usecases/CreateUserUsecase";
import { createUserSchema } from "../validation/userValidation";

export class UserController {
  constructor(private createUserUsecase: CreateUserUsecase) {}

  async create(req: Request, res: Response) {
    try {
      const data = createUserSchema.parse(req.body);
      const user = await this.createUserUsecase.execute(data);
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
