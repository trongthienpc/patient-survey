/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { prismaDb1 } from "@/lib/db";
import { SurveyResponse } from "@/types";
import { unstable_cache } from "next/cache";
import { z } from "zod";

// export async function getSurveyReport() {
//   try {
//     const doctorStats = await prismaDb1.doctor.findMany({
//       select: {
//         id: true,
//         name: true,
//         SurveySection: {
//           select: {
//             satisfaction: true,
//           },
//         },
//       },
//     });

//     const departmentStats = await prismaDb1.department.findMany({
//       select: {
//         id: true,
//         name: true,
//         SurveySection: {
//           select: {
//             satisfaction: true,
//           },
//         },
//       },
//     });

//     const satisfactionStats = await prismaDb1.surveySection.findMany({
//       include: {
//         dissatisfied: true,
//         satisfied: true,
//       },
//     });

//     const processedDoctorStats = doctorStats.map((doctor) => ({
//       id: doctor.id,
//       name: doctor.name,
//       surveyed: doctor.SurveySection.length,
//       averageRating:
//         doctor.SurveySection.reduce((sum, section) => sum + section.satisfaction, 0) / doctor.SurveySection.length || 0,
//     }));

//     const processedDepartmentStats = departmentStats.map((department) => ({
//       id: department.id,
//       name: department.name,
//       surveyed: department.SurveySection.length,
//       averageRating:
//         department.SurveySection.reduce((sum, section) => sum + section.satisfaction, 0) /
//           department.SurveySection.length || 0,
//     }));

//     const processedSatisfactionStats = {
//       positiveAspects: satisfactionStats
//         .flatMap((section) => section.satisfied)
//         .reduce((acc, reason) => {
//           acc[reason.content] = (acc[reason.content] || 0) + 1;
//           return acc;
//         }, {} as Record<string, number>),
//       negativeAspects: satisfactionStats
//         .flatMap((section) => section.dissatisfied)
//         .reduce((acc, reason) => {
//           acc[reason.content] = (acc[reason.content] || 0) + 1;
//           return acc;
//         }, {} as Record<string, number>),
//     };

//     return {
//       doctorStats: processedDoctorStats,
//       departmentStats: processedDepartmentStats,
//       satisfactionStats: {
//         positiveAspects: Object.entries(processedSatisfactionStats.positiveAspects).map(([aspect, count]) => ({
//           aspect,
//           frequency: `${count}/${satisfactionStats.length}`,
//         })),
//         negativeAspects: Object.entries(processedSatisfactionStats.negativeAspects).map(([aspect, count]) => ({
//           aspect,
//           frequency: `${count}/${satisfactionStats.length}`,
//         })),
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fetch survey report:", error);
//     throw new Error("Failed to fetch survey report");
//   }
// }

export const getDoctorByBranchNoSection = unstable_cache(
  async (branch: string) => {
    if (!branch) return [];

    try {
      const doctors = await prismaDb1.user.findMany({
        where: {
          branchId: branch,
        },
        select: {
          value: true,
          label: true,
        },
      });

      return doctors;
    } catch (error) {
      console.error("Failed to fetch doctors by branch:", error);
      throw new Error("Failed to fetch doctors by branch");
    }
  },
  ["getDoctorsByBranch"], // Cache key
  { revalidate: 60 * 60 * 12 } // Cache trong 1 giờ
);

export const getDepartmentsByBranch = unstable_cache(
  async (branch: string) => {
    try {
      const departments = await prismaDb1.department.findMany({
        where: {
          branchId: branch,
        },
        select: {
          id: true,
          name: true,
        },
      });

      return departments.map((department) => ({
        value: department.id,
        label: department.name,
      }));
    } catch (error) {
      console.error("Failed to fetch departments by branch:", error);
      throw new Error("Failed to fetch departments by branch");
    }
  },
  [""],
  { revalidate: 60 * 60 }
);

export async function submitSurvey(data: SurveyResponse) {
  const answers = JSON.stringify({
    rating: data.rating,
    selectedOptions: data.selectedOptions,
    feedback: data.feedback,
  });
  const response = await prismaDb1.surveyResponse.create({
    data: {
      branch: data.branch,
      answers: answers,
      department: data.department,
      user: data.user,
    },
  });

  return response;
}

const dateSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
});

export async function getSurveyReport(input: any) {
  const { startDate, endDate } = dateSchema.parse(input);
  const startUTC = new Date(`${startDate}T00:00:00.000Z`);
  const endUTC = new Date(`${endDate}T23:59:59.999Z`);

  const response = await prismaDb1.surveyResponse.findMany({
    where: {
      createdAt: {
        gte: startUTC,
        lt: endUTC,
      },
    },
  });

  return response;
}
