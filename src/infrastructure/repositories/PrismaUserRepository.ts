import { IUserRepository } from "../../auth/interface/IUserRepository";
import { User } from "../../core/entities/User";
import { App, RoleName, UserType } from "../../../prisma/generated/prisma";
import { prisma } from "../db/prismaClient";

export class PrismaUserRepository implements IUserRepository {
  getUserByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  verifyPassword(userId: string, password: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async createUser(data: {
    name?: string;
    email: string;
    password?: string;
  }): Promise<User> {
    const dbUser = await prisma.user.create({ data });
    return new User({
      id: dbUser.id,
      name: dbUser.name || undefined,
      email: dbUser.email,
    });
  }

  async assignRole(userId: string, roleName: string, app: App): Promise<void> {
    const role = await prisma.role.findUnique({
      where: { name: roleName as RoleName },
    });
    if (!role) throw new Error(`Role ${roleName} not found`);

    await prisma.userRole.create({ data: { userId, roleId: role.id, app } });
  }

  async createUserAppProfile(
    userId: string,
    app: App,
    type: UserType,
  ): Promise<void> {
    await prisma.userAppProfile.create({ data: { userId, app, type } });
  }
}
