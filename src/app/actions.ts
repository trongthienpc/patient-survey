"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function submitSurvey(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const doctorExaminationData = JSON.parse(
      formData.get("Doctor Examination") as string
    );
    const doctorUltrasoundData = JSON.parse(
      formData.get("Doctor Ultrasound") as string
    );
    const customerCareData = JSON.parse(
      formData.get("Customer Care") as string
    );

    await prisma.survey.create({
      data: {
        doctorExaminationSection: {
          create: {
            sectionType: "Doctor Examination",
            satisfaction: doctorExaminationData.satisfaction,
            feedback: doctorExaminationData.feedback,
            dissatisfied: {
              create: doctorExaminationData.dissatisfied.map(
                (content: string) => ({ content })
              ),
            },
            satisfied: {
              create: doctorExaminationData.satisfied.map(
                (content: string) => ({ content })
              ),
            },
          },
        },
        doctorUltrasoundSection: {
          create: {
            sectionType: "Doctor Ultrasound",
            satisfaction: doctorUltrasoundData.satisfaction,
            feedback: doctorUltrasoundData.feedback,
            dissatisfied: {
              create: doctorUltrasoundData.dissatisfied.map(
                (content: string) => ({ content })
              ),
            },
            satisfied: {
              create: doctorUltrasoundData.satisfied.map((content: string) => ({
                content,
              })),
            },
          },
        },
        customerCareSection: {
          create: {
            sectionType: "Customer Care",
            satisfaction: customerCareData.satisfaction,
            feedback: customerCareData.feedback,
            dissatisfied: {
              create: customerCareData.dissatisfied.map((content: string) => ({
                content,
              })),
            },
            satisfied: {
              create: customerCareData.satisfied.map((content: string) => ({
                content,
              })),
            },
          },
        },
      },
    });

    revalidatePath("/report");
    return { message: "Survey submitted successfully!" };
  } catch (error) {
    console.error("Failed to submit survey:", error);
    return { message: "Failed to submit survey. Please try again." };
  }
}

export async function getSurveyReport() {
  try {
    const doctorStats = await prisma.doctor.findMany({
      select: {
        id: true,
        name: true,
        SurveySection: {
          select: {
            satisfaction: true,
          },
        },
      },
    });

    const departmentStats = await prisma.department.findMany({
      select: {
        id: true,
        name: true,
        SurveySection: {
          select: {
            satisfaction: true,
          },
        },
      },
    });

    const satisfactionStats = await prisma.surveySection.findMany({
      include: {
        dissatisfied: true,
        satisfied: true,
      },
    });

    const processedDoctorStats = doctorStats.map((doctor) => ({
      id: doctor.id,
      name: doctor.name,
      surveyed: doctor.SurveySection.length,
      averageRating:
        doctor.SurveySection.reduce(
          (sum, section) => sum + section.satisfaction,
          0
        ) / doctor.SurveySection.length || 0,
    }));

    const processedDepartmentStats = departmentStats.map((department) => ({
      id: department.id,
      name: department.name,
      surveyed: department.SurveySection.length,
      averageRating:
        department.SurveySection.reduce(
          (sum, section) => sum + section.satisfaction,
          0
        ) / department.SurveySection.length || 0,
    }));

    const processedSatisfactionStats = {
      positiveAspects: satisfactionStats
        .flatMap((section) => section.satisfied)
        .reduce((acc, reason) => {
          acc[reason.content] = (acc[reason.content] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
      negativeAspects: satisfactionStats
        .flatMap((section) => section.dissatisfied)
        .reduce((acc, reason) => {
          acc[reason.content] = (acc[reason.content] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
    };

    return {
      doctorStats: processedDoctorStats,
      departmentStats: processedDepartmentStats,
      satisfactionStats: {
        positiveAspects: Object.entries(
          processedSatisfactionStats.positiveAspects
        ).map(([aspect, count]) => ({
          aspect,
          frequency: `${count}/${satisfactionStats.length}`,
        })),
        negativeAspects: Object.entries(
          processedSatisfactionStats.negativeAspects
        ).map(([aspect, count]) => ({
          aspect,
          frequency: `${count}/${satisfactionStats.length}`,
        })),
      },
    };
  } catch (error) {
    console.error("Failed to fetch survey report:", error);
    throw new Error("Failed to fetch survey report");
  }
}
