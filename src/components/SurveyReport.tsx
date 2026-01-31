/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CustomDatePicker } from "./CustomDatePicker";
import { getSurveyReport } from "@/app/actions";
import { ratings } from "./SatisfactionRating";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { Card } from "./ui/card";

export default function SurveyReport() {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [satisfiedCount, setSatisfiedCount] = useState<number>(0);
  const [unsatisfiedCount, setUnSatisfiedCount] = useState<number>(0);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  const fetchData = async () => {
    if (!startDate || !endDate) {
      setError("Chọn khoảng thời gian hợp lệ!");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    if (diffDays > 30) {
      setError("Giới hạn thời gian tối đa là 30 ngày!");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const fetchedData = await getSurveyReport({ startDate, endDate });
      fetchedData.forEach((survey: any) => {
        let parsedAnswers;
        try {
          parsedAnswers = JSON.parse(survey.answers);
        } catch {
          parsedAnswers = null;
        }

        if (["very_dissatisfied", "dissatisfied", "neutral"].includes(parsedAnswers?.rating))
          setUnSatisfiedCount((prev) => prev + 1);
        if (["satisfied", "very_satisfied"].includes(parsedAnswers?.rating)) setSatisfiedCount((prev) => prev + 1);
      });
      setData(fetchedData);

    } catch {

      setError("Có lỗi xảy ra khi lấy dữ liệu.");
    } finally {
      setLoading(false);
    }
  };

  const generatePDF = async () => {
    const pdfMakeModule = await import("pdfmake/build/pdfmake");
    const pdfFontsModule = await import("pdfmake/build/vfs_fonts");

    const pdfMake = pdfMakeModule.default;
    pdfMake.vfs = pdfFontsModule.default.vfs;

    // ✅ Tính toán tổng số khảo sát, số lượng hài lòng và không hài lòng
    const totalSurveys = data.length;
    let satisfiedCount = 0;
    let unsatisfiedCount = 0;

    data.forEach((survey: any) => {
      let parsedAnswers;
      try {
        parsedAnswers = JSON.parse(survey.answers);
      } catch {
        parsedAnswers = null;
      }

      if (["very_dissatisfied", "dissatisfied", "neutral"].includes(parsedAnswers?.rating)) unsatisfiedCount++;
      if (["satisfied", "very_satisfied"].includes(parsedAnswers?.rating)) satisfiedCount++;
    });

    const docDefinition: TDocumentDefinitions = {
      content: [
        { text: "SURVEY REPORT", style: "header", alignment: "center" },
        {
          text: `Generated on: ${new Date().toLocaleDateString()}`,
          margin: [0, 10, 0, 20],
          alignment: "center",
        },
        {
          text: `Date Range: ${format(new Date(startDate!), "dd/MM/yyyy")} - ${format(
            new Date(endDate!),
            "dd/MM/yyyy"
          )}`,
          alignment: "center",
          margin: [0, 0, 0, 10],
        },
        { text: "Summary:", style: "subheader" },

        {
          table: {
            widths: ["*", "*", "*"],
            body: [
              [
                { text: "Total Surveys", style: "summaryHeader" },
                { text: "Satisfied", style: "summaryHeader" },
                { text: "Unsatisfied", style: "summaryHeader" },
              ],
              [
                { text: totalSurveys.toString(), style: "summaryData" },
                { text: satisfiedCount.toString(), style: "summaryData" },
                { text: unsatisfiedCount.toString(), style: "summaryData" },
              ],
            ],
          },
          layout: "lightHorizontalLines",
          margin: [0, 0, 0, 20],
        },

        { text: "Survey Data:", style: "subheader" },

        {
          table: {
            headerRows: 1,
            widths: ["*", "auto", "auto", "auto"],
            body: [
              [
                { text: "Nhân viên", style: "tableHeader" },
                { text: "Khoa phòng", style: "tableHeader", alignment: "center" },
                { text: "Khảo sát", style: "tableHeader", alignment: "center" },
                { text: "Ngày thực hiện", style: "tableHeader", alignment: "center" },
              ],
              ...data.map((survey: any) => {
                let parsedAnswers;
                try {
                  parsedAnswers = JSON.parse(survey.answers);
                } catch {
                  parsedAnswers = null;
                }

                const ratingData = ratings.find((r) => r.level === parsedAnswers?.rating);
                const selectedOptions = parsedAnswers?.selectedOptions || [];
                const feedback = parsedAnswers?.feedback || "";

                return [
                  { text: `${survey.user.value} - ${survey.user.label}`, margin: [0, 5, 0, 5] },
                  { text: survey.department, alignment: "center", margin: [0, 5, 0, 5] },
                  {
                    stack: [
                      ratingData ? { text: ratingData.label, bold: true } : { text: "N/A" },
                      ...selectedOptions.map((option: string) => ({
                        text: `• ${option}`,
                        fontSize: 10,
                        margin: [0, 2, 0, 0],
                      })),
                      feedback ? { text: `📝 ${feedback}`, italics: true, fontSize: 10, margin: [0, 5, 0, 0] } : "",
                    ],
                    alignment: "center",
                  },
                  { text: format(survey.createdAt, "dd-MM-yy HH:mm"), alignment: "center", margin: [0, 5, 0, 5] },
                ];
              }),
            ],
          },
          layout: "lightHorizontalLines",
        },
        {
          text: "Báo cáo được tạo tự động bởi PatientSurvey",
          alignment: "center",
          margin: [0, 20, 0, 0],
          fontSize: 10,
          color: "gray",
        },
      ],
      styles: {
        header: { fontSize: 18, bold: true },
        subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
        tableHeader: { fontSize: 12, bold: true, fillColor: "#eeeeee" },
        summaryHeader: { fontSize: 12, bold: true, fillColor: "#cccccc", alignment: "center" },
        summaryData: { fontSize: 12, bold: true, alignment: "center" },
      },
    };

    pdfMake.createPdf(docDefinition).download(`survey_report_${new Date().toISOString().split("T")[0]}.pdf`);
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-full ">
      <h2 className="text-xl font-bold">Survey Report</h2>
      <div className="flex gap-2">
        <CustomDatePicker value={startDate} onChange={setStartDate} placeholder="Từ ngày" />
        <CustomDatePicker value={endDate} onChange={setEndDate} placeholder="Đến ngày" />
      </div>
      <div className="flex gap-2 items-center">
        <Button onClick={fetchData} disabled={loading}>
          {loading ? "Đang tải..." : "Lấy dữ liệu"}
        </Button>
        {data && <Button onClick={generatePDF}>Tải PDF</Button>}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {data ? (
        <div
          ref={reportRef}
          className="bg-white p-6 rounded-lg shadow-md text-black w-full h-[calc(450px*var(--ui-scale))] overflow-auto"
        >
          <div className="text-center mb-4 flex gap-3">
            <Card className="px-4 py-2 rounded-lg bg-gray-50 border-gray-200">
              <span className="font-semibold text-gray-700">Tổng số: {data.length}</span>
            </Card>
            <Card className="px-4 py-2 rounded-lg bg-green-50 border-green-200 text-green-700">
              <span className="font-semibold">Hài lòng: {satisfiedCount}</span>
            </Card>
            <Card className="px-4 py-2 rounded-lg bg-red-50 border-red-200 text-red-700">
              <span className="font-semibold">Không hài lòng: {unsatisfiedCount}</span>
            </Card>
          </div>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold">SURVEY REPORT</h1>
            <p className="text-gray-600">
              {format(new Date(startDate!), "dd/MM/yyyy")} - {format(new Date(endDate!), "dd/MM/yyyy")}
            </p>
          </div>

          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-primary/5 text-primary">
                <th className="border-b border-gray-200 p-3 text-left">Nhân viên</th>
                <th className="border-b border-gray-200 p-3 text-center">Khoa phòng</th>
                <th className="border-b border-gray-200 p-3 text-center">Khảo sát</th>
                <th className="border-b border-gray-200 p-3 text-center">Ngày thực hiện</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((survey: any, index: number) => (
                <tr key={index} className="border">
                  <td className="border p-2">
                    {survey.user.value} - {survey.user.label}
                  </td>
                  <td className="border p-2 text-center">{survey.department}</td>
                  <td className="border p-2 text-center">
                    <div className="flex flex-col items-center gap-2">
                      {(() => {
                        let parsedAnswers;
                        try {
                          parsedAnswers = JSON.parse(survey.answers);
                        } catch {
                          parsedAnswers = null;
                        }

                        const ratingData = ratings.find((r) => r.level === parsedAnswers?.rating);
                        const selectedOptions = parsedAnswers.selectedOptions;
                        const feedback = parsedAnswers.feedback;

                        return (
                          <div className="flex flex-col items-center">
                            {/* Hiển thị Label */}
                            {ratingData && <span className="text-gray-700 font-medium">{ratingData.label}</span>}
                            {/* Selected Options */}
                            <div className="flex flex-wrap gap-2 justify-center">
                              {selectedOptions?.map((option: string, idx: number) => (
                                <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-sm">
                                  {option}
                                </span>
                              ))}
                            </div>
                            {/* Feedback (Chỉ hiển thị nếu có nội dung) */}
                            {feedback && <div className="mt-2 text-gray-600 italic text-sm">📝 {feedback}</div>}
                          </div>
                        );
                      })()}
                    </div>
                  </td>
                  <td className="border p-2 text-center">{format(survey.createdAt, "dd-MM-yy HH:mm")}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-gray-500 text-center text-xs mt-6">Báo cáo được tạo tự động bởi PatientSurvey</p>
        </div>
      ) : (
        <p className="text-white">Chưa có dữ liệu, vui lòng chọn ngày và nhấn &quot;Lấy dữ liệu&quot;.</p>
      )}
    </div>
  );
}
