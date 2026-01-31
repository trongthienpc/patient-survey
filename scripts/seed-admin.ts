import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL_1,
        },
    },
});

async function main() {
    const password = await bcrypt.hash("admin123", 10);
    const user = await prisma.admin.upsert({
        where: { username: "admin" },
        update: {},
        create: {
            username: "admin",
            password,
        },
    });
    console.log({ user });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
