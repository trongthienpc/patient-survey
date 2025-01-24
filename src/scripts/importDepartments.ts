import fs from "fs";
import path from "path";
import { PrismaClient } from "../../prisma/generated/db1";

const prisma = new PrismaClient();

async function importDepartments() {
  try {
    // Log starting the import process
    console.log("Starting department import...");

    // Delete all the existing departments in the database
    await prisma.department.deleteMany();
    console.log("Deleted all existing departments.");

    // Load data from the JSON file
    const filePath = path.join(__dirname, "departments.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const departments = JSON.parse(rawData);

    console.log(`Loaded ${departments.length} departments from the JSON file.`);

    // Optionally, track the progress with batches
    const batchSize = 100;
    let processedCount = 0;

    // Process departments in batches
    for (let i = 0; i < departments.length; i += batchSize) {
      const batch = departments.slice(i, i + batchSize);

      // Log the progress for each batch
      console.log(
        `Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(
          departments.length / batchSize
        )}...`
      );

      // Insert each batch of departments into the database
      await prisma.department.createMany({
        data: batch,
      });

      processedCount += batch.length;
      console.log(
        `Batch processed. ${processedCount} departments imported so far.`
      );
    }

    console.log("All departments imported successfully!");
  } catch (error) {
    console.error("Error importing departments:", error);
  } finally {
    await prisma.$disconnect();
    console.log("Disconnected from the database.");
  }
}

// Run the import function
importDepartments();
