import { prisma } from "@/lib/db";

// Lấy tất cả khảo sát của một bác sĩ ở dịch vụ khám bệnh
export const doctorExaminationSurveys = await prisma.surveySection.findMany({
  where: {
    doctorId: "doctor_id",
    sectionType: "EXAMINATION",
  },
  include: {
    dissatisfied: true,
    satisfied: true,
  },
});

// Lấy thống kê theo phòng ban
export const departmentStats = await prisma.surveySection.groupBy({
  by: ["departmentId", "satisfaction"],
  where: {
    departmentId: "department_id",
  },
  _count: true,
});
