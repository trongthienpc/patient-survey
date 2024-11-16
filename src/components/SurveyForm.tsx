"use client";

import SatisfactionRating from "@/components/SatisfactionRating";
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion";
import { useCallback, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import ThankYouPage from "@/app/thank-you/page";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  dissatisfiedWithExamination,
  satisfiedWithExamination,
} from "@/data/questions";
import BoxReveal from "./magic-ui/box-reveal";
import { Answers, SurveyAnswer } from "@/types";
import { toast } from "sonner";

const sections = [
  { name: "Bác sĩ khám", id: "Bác sĩ khám" },
  { name: "Bác sĩ siêu âm", id: "Bác sĩ siêu âm" },
  { name: "Nhân viên CSKH", id: "Nhân viên CSKH" },
];

const SurveyForm = () => {
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  console.log("🚀 ~ SurveyForm ~ answers:", answers);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSectionToggle = useCallback((sectionId: string) => {
    setSelectedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((s) => s !== sectionId)
        : [...prev, sectionId]
    );
  }, []);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleAnswerChange = useCallback(
    (questionId: string, answer: Partial<SurveyAnswer>) => {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: { ...prev[questionId], ...answer },
      }));
    },
    []
  );

  const handleNavigation = useCallback(
    (direction: "next" | "back") => {
      if (direction === "next") {
        const section = selectedSections[currentSectionIndex];
        const questionId = `${section}-${currentQuestionIndex}`;
        console.log("🚀 ~ SurveyForm ~ questionId:", questionId);
        const currentAnswer = answers[questionId];
        console.log("🚀 ~ SurveyForm ~ currentAnswer:", currentAnswer);

        if (
          !currentAnswer ||
          (currentAnswer.rating === undefined &&
            (currentAnswer.selectedOptions === undefined ||
              currentAnswer.selectedOptions.length === 0))
        ) {
          toast.warning("Vui lòng trả lời câu hỏi trước khi sang câu khác", {});
          return;
        }

        if (currentQuestionIndex < 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        } else if (currentSectionIndex < selectedSections.length - 1) {
          setCurrentSectionIndex((prev) => prev + 1);
          setCurrentQuestionIndex(0);
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
    [answers, currentQuestionIndex, currentSectionIndex, selectedSections]
  );

  const handleSubmit = useCallback(() => {
    const unansweredQuestion = selectedSections.some((sectionId) =>
      [0, 1].some((questionIndex) => !answers[`${sectionId}-${questionIndex}`])
    );

    if (unansweredQuestion) {
      alert("Please answer all questions before submitting.");
    } else {
      console.log("Survey submitted:", answers);
      setIsSubmitted(true);
    }
  }, [answers, selectedSections]);

  const renderQuestion = () => {
    if (
      selectedSections.length === 0 ||
      currentSectionIndex >= selectedSections.length
    ) {
      return null;
    }
    const section = selectedSections[currentSectionIndex];
    const questionId = `${section}-${currentQuestionIndex}`;
    const currentAnswer = answers[questionId] || {};
    const shouldShowDissatisfied =
      currentAnswer?.rating === "very_dissatisfied" ||
      currentAnswer?.rating === "dissatisfied";
    console.log(
      "🚀 ~ renderQuestion ~ shouldShowDissatisfied:",
      shouldShowDissatisfied
    );
    const questions = [
      <SatisfactionRating
        key="satisfaction"
        question={`Bạn hài lòng thế nào với ${section}?`}
        initialAnswer={currentAnswer?.rating}
        onAnswerChange={(rating: string) =>
          handleAnswerChange(questionId, { rating })
        }
      />,
      shouldShowDissatisfied ? (
        <MultipleChoiceQuestion
          key="dissatisfied"
          question="Bạn không hài lòng điều gì về nhân viên vừa rồi?"
          options={dissatisfiedWithExamination}
          initialAnswer={currentAnswer.selectedOptions}
          onAnswerChange={({ selectedOptions, feedback }) =>
            handleAnswerChange(questionId, { selectedOptions, feedback })
          }
        />
      ) : (
        <MultipleChoiceQuestion
          key="satisfied"
          question="Bạn hài lòng điều gì về nhân viên vừa rồi?"
          options={satisfiedWithExamination}
          initialAnswer={currentAnswer.selectedOptions}
          onAnswerChange={(answer) => handleAnswerChange(questionId, answer)}
        />
      ),
    ];
    return questions[currentQuestionIndex];
  };

  return (
    <div className="select-none max-w-5xl border border-dashed rounded-xl border-teal-500 flex items-center justify-center ">
      <CardContent className="bg-gray-100  h-auto rounded-xl p-6">
        {!isStarted && (
          <>
            <CardHeader className="">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="font-semibold text-[3rem] leading-[3rem] p-2">
                  Khảo sát độ hài lòng khách hàng{" "}
                  <span className="text-[#5046e6]">.</span>
                </div>
              </BoxReveal>
            </CardHeader>

            <CardHeader className="text-neutral-800 text-3xl dark:text-neutral-300">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <>
                  Nhằm cải thiện chất lượng{" "}
                  <span className="font-semibold text-[#5046e6]">sản phẩm</span>{" "}
                  ,{" "}
                  <span className="font-semibold text-[#5046e6]">dịch vụ</span>{" "}
                  và{" "}
                  <span className="font-semibold text-[#5046e6]">
                    trải nghiệm{" "}
                  </span>
                  khách hàng. <br />
                </>
              </BoxReveal>
            </CardHeader>
          </>
        )}
        <CardHeader className="w-full select-none">
          {!isStarted ? (
            <div className="w-full">
              <CardDescription className="text-3xl text-neutral-800">
                Chọn nội dung cần đánh giá:
              </CardDescription>
              <CardContent className="-ml-3 text-md">
                {sections.map((section) => (
                  <div
                    className="h-full flex items-center space-x-2 space-y-2 select-none"
                    key={section.id}
                  >
                    <Checkbox
                      id={section.id}
                      checked={selectedSections.includes(section.id)}
                      onCheckedChange={() => handleSectionToggle(section.id)}
                      className="w-8 h-8 "
                    />
                    <label htmlFor={section.id} className="">
                      <span className="text-3xl">{section.name}</span>
                    </label>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="w-full flex justify-center items-center">
                <Button
                  onClick={handleStart}
                  disabled={selectedSections.length === 0}
                  className="mt-6 text-2xl p-9 flex items-center justify-center bg-[#5046e6] hover:bg-[#6969ff]"
                >
                  Start
                </Button>
              </CardFooter>
            </div>
          ) : isSubmitted ? (
            <ThankYouPage />
          ) : (
            <div className="h-full overflow-hidden">
              {renderQuestion()}
              <div className="flex justify-between mt-4">
                <Button
                  className="select-none cursor-pointer text-xl px-6 h-12 bg-[#5046e6] hover:bg-[#6969ff]"
                  onClick={() => handleNavigation("back")}
                  disabled={
                    currentQuestionIndex === 0 && currentSectionIndex === 0
                  }
                >
                  Back
                </Button>
                {currentSectionIndex === selectedSections.length - 1 &&
                currentQuestionIndex === 1 ? (
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
  );
};

export default SurveyForm;
