import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/prisma";

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL!;
  const adapter = new PrismaPg({ connectionString });

  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export { prisma };
