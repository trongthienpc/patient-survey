import { PrismaClient as PrismaClientDb1 } from "../../prisma/generated/db1";
declare global {
  // eslint-disable-next-line no-var
  var cachedPrismaDb1: PrismaClientDb1 | undefined;
  // eslint-disable-next-line no-var
}

export let prismaDb1: PrismaClientDb1;

if (process.env.NODE_ENV === "production") {
  // Create new PrismaClient instances for production
  prismaDb1 = new PrismaClientDb1({
    datasources: {
      db: {
        url: process.env.DATABASE_URL_1, // Connection string for database 1
      },
    },
  });
} else {
  // Use cached PrismaClient instances in development
  if (!global.cachedPrismaDb1) {
    global.cachedPrismaDb1 = new PrismaClientDb1({
      datasources: {
        db: {
          url: process.env.DATABASE_URL_1,
        },
      },
    });
  }

  prismaDb1 = global.cachedPrismaDb1;
}
