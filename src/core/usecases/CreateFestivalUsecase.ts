import { IFestivalRepository } from "../../apps/yoruba-calendar/interfaces/IFestivalRepository";
import { Festival } from "../entities/Festival";

export interface CreateFestivalDTO {
  title: string;
  description: string;
  userId: string;
  orisaId: string;
  country: string;
  eventType: "physical" | "virtual";
  timezone: string;
  startDate: Date;
  endDate: Date;
}

export class CreateFestivalUsecase {
  constructor(private festivalRepo: IFestivalRepository) {}

  async execute(data: CreateFestivalDTO): Promise<Festival> {
    return this.festivalRepo.create(data);
  }
}
