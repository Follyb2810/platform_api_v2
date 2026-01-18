import { IUserRepository } from "../../auth/interface/IUserRepository";
import { App, UserType } from "../enums";

export interface CreateUserDTO {
  name?: string;
  email: string;
  password?: string;
  app: App;
  type: UserType;
}

export class CreateUserUsecase {
  constructor(private userRepo: IUserRepository) {}

  async execute(data: CreateUserDTO) {
    // 1️⃣ Create the user
    const user = await this.userRepo.createUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    // 2️⃣ Assign default role USER
    await this.userRepo.assignRole(user.id, "USER", data.app);

    // 3️⃣ Create user app profile
    await this.userRepo.createUserAppProfile(user.id, data.app, data.type);

    return user;
  }
}
