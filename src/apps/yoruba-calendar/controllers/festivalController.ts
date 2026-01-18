import { Request, Response } from "express";
import { CreateFestivalUsecase } from "../usecases/CreateFestivalUsecase";
import { festivalSchema } from "../validation/festivalSchema";

export class FestivalController {
  constructor(private createFestivalUsecase: CreateFestivalUsecase) {}

  async create(req: Request, res: Response) {
    try {
      const parsed = festivalSchema.parse(req.body);

      const festival = await this.createFestivalUsecase.execute({
        ...parsed,
        userId: "",
      });

      return res.status(201).json(festival);
    } catch (err: any) {
      return res.status(400).json({
        error: err.message ?? "Invalid request",
      });
    }
  }
}
