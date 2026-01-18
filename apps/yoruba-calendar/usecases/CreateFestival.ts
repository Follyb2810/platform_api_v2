import { Festival } from "../../../core/entities/Festival";
import { FestivalRepository } from "../../../core/repositories/FestivalRepository";

export class CreateFestival {
  constructor(private festivalRepo: FestivalRepository) {}

  async execute(data: Omit<Festival, "id">) {
    const festival = new Festival(
      0, // Prisma will auto-generate id
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
