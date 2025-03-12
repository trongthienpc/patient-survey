"use client";

import SatisfactionRating from "@/components/SatisfactionRating";
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import ThankYouPage from "@/app/thank-you/page";
import { CardContent, CardHeader } from "@/components/ui/card";
import {
  dissatisfiedWithExamination,
  dissatisfiedWithServiceCare,
  dissatisfiedWithUltrasound,
  satisfiedWithExamination,
  satisfiedWithServiceCare,
  satisfiedWithUltrasound,
} from "@/data/questions";
import BoxReveal from "./magic-ui/box-reveal";
import { Answers, SurveyAnswer } from "@/types";
import { toast } from "sonner";
import Image from "next/image";
import { useSelection } from "@/providers/SelectionContext";

export const dynamic = "force-dynamic";

const SurveyForm = () => {
  const { selectedDepartment } = useSelection();
  console.log("🚀 ~ SurveyForm ~ selectedDepartment:", selectedDepartment);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = useCallback((questionId: string, answer: Partial<SurveyAnswer>) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { ...prev[questionId], ...answer },
    }));
  }, []);

  const sectionImages: { [key: string]: string } = {
    "Bác sĩ khám": "/doctor-1.jpg",
    "Bác sĩ siêu âm": "/doctor-2.jpg",
    "Nhân viên CSKH": "/care.jpg",
  };

  const getCurrentImage = () => {
    return (
      // eslint-disable-next-line no-var
      sectionImages[selectedDepartment?.label] || "/nurse.webp"
    );
  };

  const handleNavigation = useCallback(
    (direction: "next" | "back") => {
      if (direction === "next") {
        const questionId = `${selectedDepartment?.label}-Q.${currentQuestionIndex}`;
        const currentAnswer = answers[questionId];

        if (
          !currentAnswer ||
          (currentAnswer.rating === undefined &&
            (currentAnswer.selectedOptions === undefined || currentAnswer.selectedOptions.length === 0))
        ) {
          toast.warning("Vui lòng trả lời câu hỏi trước khi sang câu khác", {});
          return;
        }

        if (currentQuestionIndex < 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        }
      } else {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex((prev) => prev - 1);
        } else if (currentSectionIndex > 0) {
          setCurrentSectionIndex((prev) => prev - 1);
          setCurrentQuestionIndex(1);
        }
      }
    },
    [answers, currentQuestionIndex, currentSectionIndex, selectedDepartment]
  );

  const handleSubmit = useCallback(() => {
    console.log("Survey submitted:", answers);
    const unansweredQuestion = [0, 1].some(
      (questionIndex) => !answers[`${selectedDepartment?.label}-Q.${questionIndex}`]
    );

    if (unansweredQuestion) {
      alert("Please answer all questions before submitting.");
    } else {
      console.log("Survey submitted:", answers);
      setIsSubmitted(true);
    }
  }, [answers, selectedDepartment?.label]);

  const renderQuestion = () => {
    const questionId = `${selectedDepartment?.label}-Q.${currentQuestionIndex}`;
    const currentAnswer = answers[questionId];

    if (currentQuestionIndex === 0) {
      return (
        <div className="max-h-[720px] flex flex-col gap-9 px-6">
          <SatisfactionRating
            key="satisfaction"
            question={`Bạn hài lòng thế nào với ${selectedDepartment?.label}?`}
            initialAnswer={currentAnswer?.rating}
            onAnswerChange={(rating) => handleAnswerChange(questionId, { rating })}
          />
        </div>
      );
    }

    const showDissatisfied = ["very_dissatisfied", "dissatisfied", "neutral"].includes(
      answers[`${selectedDepartment.label}-0`]?.rating || ""
    );

    return (
      <MultipleChoiceQuestion
        key="choices"
        id={showDissatisfied ? "dissatisfied" : "satisfied"}
        question={
          showDissatisfied
            ? "Bạn có thể chia sẻ thêm cảm nhận của bạn về những ý kiến trên (có thể chọn nhiều câu trả lời)"
            : `Bạn hài lòng về điều gì ở ${
                selectedDepartment?.label === "Bác sĩ khám"
                  ? "bác sĩ vừa thăm khám"
                  : selectedDepartment?.label === "Bác sĩ siêu âm"
                  ? "bác sĩ vừa siêu âm"
                  : "Nhân viên CSKH"
              }  (có thể chọn nhiều câu trả lời)`
        }
        options={
          showDissatisfied
            ? selectedDepartment?.label === "Bác sĩ khám"
              ? dissatisfiedWithExamination
              : selectedDepartment?.label === "Bác sĩ siêu âm"
              ? dissatisfiedWithUltrasound
              : dissatisfiedWithServiceCare
            : selectedDepartment?.label === "Bác sĩ khám"
            ? satisfiedWithExamination
            : selectedDepartment?.label === "Bác sĩ siêu âm"
            ? satisfiedWithUltrasound
            : satisfiedWithServiceCare
        }
        initialAnswer={currentAnswer?.selectedOptions}
        onAnswerChange={({ selectedOptions, feedback }) =>
          handleAnswerChange(questionId, { selectedOptions, feedback })
        }
      />
    );
  };

  return (
    <div className="select-none border border-dashed rounded-xl border-teal-500 grid grid-cols-3 h-full ">
      <div className="col-span-2">
        <CardContent className="bg-gray-100 h-auto rounded-tl-xl rounded-bl-xl p-3">
          <CardHeader className="w-full select-none">
            {isSubmitted ? (
              <ThankYouPage />
            ) : (
              <div className="h-full overflow-hidden">
                <>
                  <CardHeader className="">
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                      <div className="font-semibold text-[3rem] leading-[3rem] p-2">
                        Khảo sát độ hài lòng khách hàng <span className="text-[#5046e6]">.</span>
                      </div>
                    </BoxReveal>
                  </CardHeader>

                  {/* <CardHeader className="text-neutral-800 text-3xl dark:text-neutral-300">
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                      <>
                        Nhằm cải thiện chất lượng <span className="font-semibold text-[#5046e6]">sản phẩm</span>,{" "}
                        <span className="font-semibold text-[#5046e6]">dịch vụ</span> và{" "}
                        <span className="font-semibold text-[#5046e6]">trải nghiệm </span>
                        khách hàng. <br />
                      </>
                    </BoxReveal>
                  </CardHeader> */}
                </>
                {renderQuestion()}
                <div className="flex justify-between mt-4">
                  <Button
                    className="select-none cursor-pointer text-xl px-6 h-12 bg-[#5046e6] hover:bg-[#6969ff]"
                    onClick={() => handleNavigation("back")}
                    disabled={currentQuestionIndex === 0 && currentSectionIndex === 0}
                  >
                    Back
                  </Button>
                  {currentQuestionIndex === 1 ? (
                    <Button
                      className="select-none cursor-pointer text-xl px-6 h-12 bg-[#5046e6]  hover:bg-[#6969ff]"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      className="select-none cursor-pointer text-xl px-6 h-12 bg-[#5046e6] hover:bg-[#6969ff]"
                      onClick={() => handleNavigation("next")}
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            )}
          </CardHeader>
        </CardContent>
      </div>
      <div className="relative h-full">
        <Image
          src={getCurrentImage()}
          alt="medical staff"
          fill
          className="object-cover rounded-tr-xl rounded-br-xl transition-all ease-in-out duration-500"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default SurveyForm;
