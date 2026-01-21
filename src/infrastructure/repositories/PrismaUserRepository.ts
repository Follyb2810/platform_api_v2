import { prisma } from "../db/prismaClient";
import {
  App as PrismaApp,
  RoleName as PrismaRoleName,
} from "./../../../prisma/generated/prisma";
import { User } from "../../core/entities/User";
import { IUserRepository } from "../../auth/interface/IUserRepository";
import { App as DomainApp, RoleName, UserType } from "../../core/enums";
import { UserRole } from "../../core/entities/UserRole";
import { UserAppProfile } from "../../core/entities/UserAppProfile";
import { ComparePassword } from "../../shared/utils/bcrypt";

export class PrismaUserRepository implements IUserRepository {
  getUserById(userId: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  updatePassword(userId: string, newPassword: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  createPasswordResetToken(userId: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  verifyPasswordResetToken(token: string): Promise<string | null> {
    throw new Error("Method not implemented.");
  }
  createEmailVerificationToken(userId: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  verifyEmail(token: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  storeRefreshToken(userId: string, token: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  revokeRefreshToken(token: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  recordLogin(userId: string, ip: string, device?: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async getUserByEmail(email: string): Promise<User | null> {
    const dbUser = await prisma.user.findUnique({
      where: { email },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
        userAppProfiles: true,
      },
    });
    if (!dbUser) return null;

    return new User({
      id: dbUser.id,
      name: dbUser.name || undefined,
      email: dbUser.email,
      // password: dbUser.password || undefined,
      roles: dbUser.roles.map(
        (r) =>
          new UserRole({
            userId: r.userId,
            roleName: r.role.name as RoleName,
            app: r.app as DomainApp,
          }),
      ),
      userAppProfiles: dbUser.userAppProfiles.map(
        (p) =>
          new UserAppProfile({
            userId: p.userId,
            app: p.app as DomainApp,
            type: p.type as UserType,
          }),
      ),
    });
  }

  async createUser(data: { name?: string; email: string; password?: string }) {
    const dbUser = await prisma.user.create({ data });

    return new User({
      id: dbUser.id,
      name: dbUser.name || undefined,
      email: dbUser.email,
    });
  }

  async assignRole(userId: string, role: RoleName, app: DomainApp) {
    const prismaRole = role as PrismaRoleName;
    const prismaApp = app as PrismaApp;

    const roleEntity = await prisma.role.findUnique({
      where: { name: prismaRole },
    });

    if (!roleEntity) throw new Error("Role not seeded");

    await prisma.userRole.create({
      data: {
        userId,
        roleId: roleEntity.id,
        app: prismaApp,
      },
    });
  }

  async createUserAppProfile(userId: string, app: DomainApp, type: UserType) {
    await prisma.userAppProfile.create({
      data: {
        userId,
        app: app as PrismaApp,
        type: type as any,
      },
    });
  }
  async verifyPassword(userId: string, password: string): Promise<boolean> {
    const dbUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!dbUser || !dbUser.password) return false;

    return ComparePassword(password, dbUser.password);
  }
}
