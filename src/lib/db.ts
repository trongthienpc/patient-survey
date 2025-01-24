import { PrismaClient as PrismaClientDb1 } from "../../prisma/generated/db1";
import { PrismaClient as PrismaClientDb2 } from "../../prisma/doctors/generated/db2";
declare global {
  // eslint-disable-next-line no-var
  var cachedPrismaDb1: PrismaClientDb1 | undefined;
  // eslint-disable-next-line no-var
  var cachedPrismaDb2: PrismaClientDb2 | undefined;
}

export let prismaDb1: PrismaClientDb1;
export let prismaDb2: PrismaClientDb2;

if (process.env.NODE_ENV === "production") {
  // Create new PrismaClient instances for production
  prismaDb1 = new PrismaClientDb1({
    datasources: {
      db: {
        url: process.env.DATABASE_URL_1, // Connection string for database 1
      },
    },
  });

  prismaDb2 = new PrismaClientDb2({
    datasources: {
      db: {
        url: process.env.DATABASE_URL_2, // Connection string for database 2
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
  if (!global.cachedPrismaDb2) {
    global.cachedPrismaDb2 = new PrismaClientDb2({
      datasources: {
        db: {
          url: process.env.DATABASE_URL_2,
        },
      },
    });
  }

  prismaDb1 = global.cachedPrismaDb1;
  prismaDb2 = global.cachedPrismaDb2;
}
