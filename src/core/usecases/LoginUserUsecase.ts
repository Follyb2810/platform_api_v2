import { IUserRepository } from "../../auth/interface/IUserRepository";

export interface LoginUserDTO {
  email: string;
  password?: string;
  provider?: "GOOGLE" | "LOCAL";
}

export class LoginUserUsecase {
  constructor(private userRepo: IUserRepository) {}

  async execute(data: LoginUserDTO) {
    let user;

    if (data.provider === "GOOGLE") {
      user = await this.userRepo.getUserByEmail(data.email);
      if (!user) {
        throw new Error("User not found for Google login");
      }
    } else {
      user = await this.userRepo.getUserByEmail(data.email);
      if (!user) throw new Error("Invalid credentials");

      const isValid = await this.userRepo.verifyPassword(
        user.id,
        data.password || "",
      );
      if (!isValid) throw new Error("Invalid credentials");
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      roles: user.roles,
    };
  }
}
