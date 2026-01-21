// import { Festival } from "../../../core/entities/Festival";
// import { IFestivalRepository } from "../interfaces/IFestivalRepository";

// export class CreateFestivalUsecase {
//   constructor(private festivalRepo: IFestivalRepository) {}

//   async execute(data: Omit<Festival, "id">) {
//     const festival = new Festival(
//       0, // Prisma will auto-generate ID
//       data.title,
//       data.description,
//       data.orisaId,
//       data.userId,
//       data.country,
//       data.eventType,
//       data.timezone,
//       data.startDate,
//       data.endDate,
//     );

//     return this.festivalRepo.create(festival);
//   }
// }
