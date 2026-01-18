// apps/yoruba-calendar/usecases/CreateFestivalAppUsecase.ts
import { CreateFestival as CoreCreateFestival } from "../../../core/usecases/CreateFestival";

export class CreateFestivalAppUsecase {
  constructor(private coreUsecase: CoreCreateFestival) {}

  async execute(req: any) {
    // extract user from JWT
    const userId = req.user.sub;

    // map request body to core entity shape
    const festivalData = {
      ...req.body,
      userId,
    };

    // call core usecase
    return this.coreUsecase.execute(festivalData);
  }
}
