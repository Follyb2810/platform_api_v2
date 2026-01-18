import { IUserRepository } from "../repositories/IUserRepository";
import { App, UserType } from "@prisma/client";

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
    // Create user
    const user = await this.userRepo.createUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    // Assign default USER role
    await this.userRepo.assignRole({
      userId: user.id,
      roleName: "USER",
      app: data.app,
    });

    // Create user app profile
    await this.userRepo.createUserAppProfile({
      userId: user.id,
      app: data.app,
      type: data.type,
    });

    return user;
  }
}
