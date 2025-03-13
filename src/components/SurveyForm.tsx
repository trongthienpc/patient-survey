/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SatisfactionRating from "@/components/SatisfactionRating";
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import ThankYouPage from "@/app/thank-you/page";
import { CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";
import { useSelection } from "@/providers/SelectionContext";
import BoxReveal from "./magic-ui/box-reveal";
import { Answers, SurveyAnswer } from "@/types";
import {
  dissatisfiedWithExamination,
  dissatisfiedWithServiceCare,
  dissatisfiedWithUltrasound,
  satisfiedWithExamination,
  satisfiedWithServiceCare,
  satisfiedWithUltrasound,
} from "@/data/questions";

export const dynamic = "force-dynamic";

const questionOptions: any = {
  satisfied: {
    "Bác sĩ khám": satisfiedWithExamination,
    "Bác sĩ siêu âm": satisfiedWithUltrasound,
    "Nhân viên CSKH": satisfiedWithServiceCare,
  },
  dissatisfied: {
    "Bác sĩ khám": dissatisfiedWithExamination,
    "Bác sĩ siêu âm": dissatisfiedWithUltrasound,
    "Nhân viên CSKH": dissatisfiedWithServiceCare,
  },
};

const sectionImages: Record<string, string> = {
  "Bác sĩ khám": "/doctor-1.jpg",
  "Bác sĩ siêu âm": "/doctor-2.jpg",
  "Nhân viên CSKH": "/care.jpg",
};

const SurveyForm = () => {
  const { selectedDepartment } = useSelection();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = useCallback((questionId: string, answer: Partial<SurveyAnswer>) => {
    setAnswers((prev) => ({ ...prev, [questionId]: { ...prev[questionId], ...answer } }));
  }, []);

  const handleNavigation = useCallback(
    (direction: "next" | "back") => {
      if (direction === "next") {
        const questionId = `${selectedDepartment?.label}-Q.${currentQuestionIndex}`;
        if (!answers[questionId]?.rating && !answers[questionId]?.selectedOptions?.length) {
          toast.warning("Vui lòng trả lời trước khi tiếp tục.");
          return;
        }
        setCurrentQuestionIndex((prev) => (prev < 1 ? prev + 1 : prev));
      } else {
        setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
      }
    },
    [answers, currentQuestionIndex, selectedDepartment]
  );

  const handleSubmit = useCallback(() => {
    if ([0, 1].some((i) => !answers[`${selectedDepartment?.label}-Q.${i}`])) {
      alert("Vui lòng trả lời tất cả câu hỏi.");
      return;
    }
    setIsSubmitted(true);
  }, [answers, selectedDepartment?.label]);

  const renderQuestion = () => {
    const questionId = `${selectedDepartment?.label}-Q.${currentQuestionIndex}`;
    const currentAnswer = answers[questionId];

    if (currentQuestionIndex === 0) {
      return (
        <SatisfactionRating
          key="satisfaction"
          question={`Bạn hài lòng thế nào với ${selectedDepartment?.label}?`}
          initialAnswer={currentAnswer?.rating}
          onAnswerChange={(rating) => handleAnswerChange(questionId, { rating })}
        />
      );
    }

    const isDissatisfied = ["very_dissatisfied", "dissatisfied", "neutral"].includes(
      answers[`${selectedDepartment?.label}-Q.0`]?.rating || ""
    );

    return (
      <MultipleChoiceQuestion
        key="choices"
        id={isDissatisfied ? "dissatisfied" : "satisfied"}
        question={
          isDissatisfied
            ? "Bạn có thể chia sẻ thêm cảm nhận (có thể chọn nhiều câu trả lời)"
            : `Bạn hài lòng về điều gì ở ${selectedDepartment?.label}?`
        }
        options={
          isDissatisfied
            ? questionOptions.dissatisfied[selectedDepartment?.label]
            : questionOptions.satisfied[selectedDepartment?.label]
        }
        initialAnswer={currentAnswer?.selectedOptions}
        onAnswerChange={(answer) => handleAnswerChange(questionId, answer)}
      />
    );
  };

  return (
    <div className="select-none border border-dashed rounded-xl border-teal-500 grid grid-cols-3 h-full">
      <div className="col-span-2">
        <CardContent className="bg-gray-100 h-auto rounded-tl-xl rounded-bl-xl p-3">
          <CardHeader className="w-full">
            {isSubmitted ? (
              <ThankYouPage />
            ) : (
              <>
                <CardHeader>
                  <BoxReveal boxColor="#5046e6" duration={0.5}>
                    <div className="font-semibold text-[3rem] leading-[3rem] p-2">
                      Khảo sát độ hài lòng khách hàng <span className="text-[#5046e6]">.</span>
                    </div>
                  </BoxReveal>
                </CardHeader>
                {renderQuestion()}
                <div className="flex justify-between mt-4">
                  <Button
                    className="text-xl px-6 h-12 bg-[#5046e6] hover:bg-[#6969ff]"
                    onClick={() => handleNavigation("back")}
                    disabled={currentQuestionIndex === 0}
                  >
                    Back
                  </Button>
                  <Button
                    className="text-xl px-6 h-12 bg-[#5046e6] hover:bg-[#6969ff]"
                    onClick={currentQuestionIndex === 1 ? handleSubmit : () => handleNavigation("next")}
                  >
                    {currentQuestionIndex === 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </>
            )}
          </CardHeader>
        </CardContent>
      </div>
      <div className="relative h-full">
        <Image
          src={sectionImages[selectedDepartment?.label] || "/nurse.webp"}
          alt="medical staff"
          fill
          className="object-cover rounded-tr-xl rounded-br-xl transition-all duration-500"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default SurveyForm;
