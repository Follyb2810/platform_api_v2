import {
  App,
  PrismaClient,
  RoleName,
  UserType,
} from "../prisma/generated/prisma";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function main() {
  console.log("Seeding database...");

  const roles = [
    RoleName.USER,
    RoleName.CREATOR,
    RoleName.MODERATOR,
    RoleName.ADMIN,
    RoleName.SUPERADMIN,
    RoleName.TAX_MANAGER,
    RoleName.CALENDAR_MANAGER,
    RoleName.TICKET_MANAGER,
    RoleName.CLEANING_MANAGER,
  ];

  for (const roleName of roles) {
    await prisma.role.upsert({
      where: { name: roleName },
      update: {},
      create: { name: roleName },
    });
  }

  const users = [
    { name: "Admin", email: "admin@dev.com", emailVerified: new Date() },
    { name: "User", email: "user@dev.com", emailVerified: new Date() },
    {
      name: "SuperAdmin",
      email: "superadmin@dev.com",
      emailVerified: new Date(),
    },
  ];

  for (const userData of users) {
    await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    });
  }

  const admin = await prisma.user.findUnique({
    where: { email: "admin@dev.com" },
  });
  const user = await prisma.user.findUnique({
    where: { email: "user@dev.com" },
  });

  const creatorRole = await prisma.role.findUnique({
    where: { name: RoleName.CREATOR },
  });
  const userRole = await prisma.role.findUnique({
    where: { name: RoleName.USER },
  });
  const adminRole = await prisma.role.findUnique({
    where: { name: RoleName.ADMIN },
  });

  if (admin && creatorRole && userRole) {
    await prisma.userRole.createMany({
      data: [
        { userId: admin.id, roleId: creatorRole.id, app: App.YORUBA_CALENDAR },
        { userId: admin.id, roleId: userRole.id, app: App.TICKETING },
      ],
      skipDuplicates: true,
    });
  }

  if (user && adminRole) {
    await prisma.userRole.create({
      data: { userId: user.id, roleId: adminRole.id, app: App.TAX_FLOW },
    });
  }

  if (admin) {
    await prisma.userAppProfile.create({
      data: {
        userId: admin.id,
        app: App.YORUBA_CALENDAR,
        type: UserType.INDIVIDUAL,
      },
    });
    await prisma.userAppProfile.create({
      data: { userId: admin.id, app: App.TICKETING, type: UserType.COMPANY },
    });
  }

  if (user) {
    await prisma.userAppProfile.create({
      data: { userId: user.id, app: App.TAX_FLOW, type: UserType.SME },
    });
  }

  const superAdmin = await prisma.user.findUnique({
    where: { email: "superadmin@dev.com" },
  });

  if (superAdmin) {
    const allRoles = await prisma.role.findMany();

    const apps = [
      App.YORUBA_CALENDAR,
      App.TAX_FLOW,
      App.CLEANING_SERVICE,
      App.TICKETING,
    ];

    const superAdminRolesData = [];

    for (const role of allRoles) {
      for (const app of apps) {
        superAdminRolesData.push({
          userId: superAdmin.id,
          roleId: role.id,
          app,
        });
      }
    }

    await prisma.userRole.createMany({
      data: superAdminRolesData,
      skipDuplicates: true,
    });

    for (const app of apps) {
      await prisma.userAppProfile.upsert({
        where: { userId_app: { userId: superAdmin.id, app } },
        update: {},
        create: { userId: superAdmin.id, app, type: UserType.INDIVIDUAL }, // or COMPANY/SME if preferred
      });
    }
  }

  const orisa1 = await prisma.orisa.upsert({
    where: { name: "Sango" },
    update: {},
    create: { name: "Sango", userId: admin?.id },
  });

  const orisa2 = await prisma.orisa.upsert({
    where: { name: "Oshun" },
    update: {},
    create: { name: "Oshun", userId: user?.id },
  });

  // -------------------------
  // Create sample Festival
  // -------------------------
  if (admin && orisa1) {
    await prisma.festival.create({
      data: {
        title: "Odunde Festival",
        description: "Annual Yoruba cultural festival",
        orisaId: orisa1.id,
        userId: admin.id,
        country: "Nigeria",
        eventType: "physical",
        timezone: "Africa/Lagos",
        startDate: new Date("2026-06-01T10:00:00Z"),
        endDate: new Date("2026-06-03T18:00:00Z"),
        ticketType: "single",
      },
    });
  }

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
