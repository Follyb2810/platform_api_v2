import { Festival } from "../../../core/entities/Festival";

export interface IFestivalRepository {
  create(data: {
    title: string;
    description: string;
    userId: string;
    orisaId: string;
    country: string;
    eventType: "physical" | "virtual";
    timezone: string;
    startDate: Date;
    endDate: Date;
  }): Promise<Festival>;

  findById(id: number): Promise<Festival | null>;
  list(): Promise<Festival[]>;
}
