import { Request, Response } from "express";
import { CreateUserUsecase } from "../../application/usecases/user/CreateUserUsecase";

export class UserController {
  constructor(private createUserUsecase: CreateUserUsecase) {}

  async create(req: Request, res: Response) {
    try {
      console.log({ body: req.body });
      const user = await this.createUserUsecase.execute(req.body);
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async getUserByEmail(req: Request, res: Response) {
    try {
      const email = req.params.email as string;
      const user = await this.createUserUsecase.getUserByEmail(email);
      return res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
