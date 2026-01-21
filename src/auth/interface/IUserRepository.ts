import { User } from "../../core/entities/User";
import { App, RoleName, UserType } from "../../core/enums";
import { CreateUserDTO } from "../Dtos/CreateUserDTO";

export interface IUserRepository {
  createUser(user: CreateUserDTO): Promise<User>;

  assignRole(userId: string, roleName: RoleName, app: App): Promise<void>;
  createUserAppProfile(userId: string, app: App, type: UserType): Promise<void>;

  getUserById(userId: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;

  verifyPassword(userId: string, password: string): Promise<boolean>;
  updatePassword(userId: string, newPassword: string): Promise<void>;

  createPasswordResetToken(userId: string): Promise<string>;
  verifyPasswordResetToken(token: string): Promise<string | null>;

  createEmailVerificationToken(userId: string): Promise<string>;
  verifyEmail(token: string): Promise<void>;

  storeRefreshToken(userId: string, token: string): Promise<void>;
  revokeRefreshToken(token: string): Promise<void>;

  recordLogin(userId: string, ip: string, device?: string): Promise<void>;
}
