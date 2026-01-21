import { IFestivalRepository } from "../../api/yoruba-calendar/interfaces/IFestivalRepository";
import { Festival } from "../../core/entities/Festival";
import { prisma } from "../db/prismaClient";

export class PrismaFestivalRepository implements IFestivalRepository {
  async create(data: any): Promise<Festival> {
    const record = await prisma.festival.create({ data });

    return new Festival(
      record.id,
      record.title,
      record.description,
      record.userId,
      record.orisaId.toString(),
      record.country,
      record.eventType as any,
      record.timezone,
      record.startDate,
      record.endDate,
    );
  }

  async findById(id: number): Promise<Festival | null> {
    const r = await prisma.festival.findUnique({ where: { id } });
    if (!r) return null;

    return new Festival(
      r.id,
      r.title,
      r.description,
      r.userId,
      r.orisaId.toString(),
      r.country,
      r.eventType as any,
      r.timezone,
      r.startDate,
      r.endDate,
    );
  }

  async list(): Promise<Festival[]> {
    const records = await prisma.festival.findMany();

    return records.map(
      (r) =>
        new Festival(
          r.id,
          r.title,
          r.description,
          r.userId,
          r.orisaId.toString(),
          r.country,
          r.eventType as any,
          r.timezone,
          r.startDate,
          r.endDate,
        ),
    );
  }
}
