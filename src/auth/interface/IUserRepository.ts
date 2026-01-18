// auth/interface/IUserRepository.ts
import { User } from "../../core/entities/User";
import { App, UserType } from "../../../prisma/generated/prisma";

export interface IUserRepository {
  createUser(user: {
    name?: string;
    email: string;
    password?: string;
  }): Promise<User>;

  assignRole(userId: string, roleName: string, app: App): Promise<void>;

  createUserAppProfile(userId: string, app: App, type: UserType): Promise<void>;

  getUserByEmail(email: string): Promise<User | null>;

  verifyPassword(userId: string, password: string): Promise<boolean>;
}
