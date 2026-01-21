import { Festival } from "../../core/entities/Festival";
import { PrismaFestivalRepository } from "../../infrastructure/repositories/PrismaFestivalRepository";

export class CreateFestival {
  constructor(private festivalRepo: PrismaFestivalRepository) {}

  async execute(data: Omit<Festival, "id">): Promise<Festival> {
    // domain validations
    if (!data.title) throw new Error("Title is required");

    const festival = new Festival(
      0, // id will be generated
      data.title,
      data.description,
      data.orisaId,
      data.userId,
      data.country,
      data.eventType,
      data.timezone,
      data.startDate,
      data.endDate,
    );

    return this.festivalRepo.create(festival);
  }
}
