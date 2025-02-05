"use client";

import SatisfactionRating from "@/components/SatisfactionRating";
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion";
import { useCallback, useEffect, useState } from "react";
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
import AnimatedCheckbox from "./AnimatedCheckbox";
import Image from "next/image";
import Doctors from "./Doctors";
import Departments from "./Departments";
import Branches from "./Branches";

export const dynamic = "force-dynamic";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedBranch");
      return saved ? JSON.parse(saved).value : "";
    }
    return "";
  });

  const [selectedDepartment, setSelectedDepartment] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedDepartment");
      return saved ? JSON.parse(saved).value : "";
    }
    return "";
  });

  const [selectedDoctor, setSelectedDoctor] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedDoctor");
      return saved ? JSON.parse(saved).value : "";
    }
    return "";
  });

  useEffect(() => {
    return () => {
      if (isSubmitted) {
        localStorage.removeItem("selectedBranch");
        localStorage.removeItem("selectedDepartment");
        localStorage.removeItem("selectedDoctor");
      }
    };
  }, [isSubmitted]);

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

  const sectionImages: { [key: string]: string } = {
    "Bác sĩ khám": "/doctor-1.jpg",
    "Bác sĩ siêu âm": "/doctor-2.jpg",
    "Nhân viên CSKH": "/care.jpg",
  };
  const getCurrentImage = () => {
    if (!isStarted) return "/nurse.webp";
    return (
      // eslint-disable-next-line no-var
      sectionImages[selectedSections[currentSectionIndex]] || "/nurse.webp"
    );
  };

  const handleNavigation = useCallback(
    (direction: "next" | "back") => {
      if (direction === "next") {
        const section = selectedSections[currentSectionIndex];
        const questionId = `${section}-${currentQuestionIndex}`;
        const currentAnswer = answers[questionId];

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
    if (!selectedSections[currentSectionIndex]) return null;

    const section = selectedSections[currentSectionIndex];
    const questionId = `${section}-${currentQuestionIndex}`;
    const currentAnswer = answers[questionId];

    if (currentQuestionIndex === 0) {
      return (
        <div className="max-h-[720px] flex flex-col gap-9">
          {/* <Actor
            initialAnswer={currentAnswer?.room || []}
            onAnswerChange={(room: string[] | undefined) =>
              handleAnswerChange(questionId, { room })
            }
          /> */}
          <Branches
            setSelectedBranch={setSelectedBranch}
            selectedBranch={selectedBranch}
          />
          <Departments
            id={selectedBranch}
            setSelectedDepartment={setSelectedDepartment}
            selectedDepartment={selectedDepartment}
          />
          <Doctors
            id={selectedBranch}
            setSelectedDoctor={setSelectedDoctor}
            selectedDoctor={selectedDoctor}
          />
          <SatisfactionRating
            key="satisfaction"
            question={`Bạn hài lòng thế nào với ${section}?`}
            initialAnswer={currentAnswer?.rating}
            onAnswerChange={(rating) =>
              handleAnswerChange(questionId, { rating })
            }
          />
        </div>
      );
    }

    const showDissatisfied = ["very_dissatisfied", "dissatisfied"].includes(
      answers[`${section}-0`]?.rating || ""
    );

    return (
      <MultipleChoiceQuestion
        key="choices"
        id={showDissatisfied ? "dissatisfied" : "satisfied"}
        question={
          showDissatisfied
            ? "Bạn không hài lòng điều gì về nhân viên vừa rồi?"
            : "Bạn hài lòng điều gì về nhân viên vừa rồi?"
        }
        options={
          showDissatisfied
            ? dissatisfiedWithExamination
            : satisfiedWithExamination
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
        <CardContent className="bg-gray-100  h-auto rounded-tl-xl rounded-bl-xl p-6">
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
                    <span className="font-semibold text-[#5046e6]">
                      sản phẩm
                    </span>
                    ,{" "}
                    <span className="font-semibold text-[#5046e6]">
                      dịch vụ
                    </span>{" "}
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
                  Vui lòng chọn nội dung cần đánh giá:
                </CardDescription>
                <CardContent className="-ml-3 mt-3 flex flex-col gap-3 justify-center">
                  {sections.map((section) => (
                    <AnimatedCheckbox
                      section={section}
                      selectedSections={selectedSections}
                      handleSectionToggle={handleSectionToggle}
                      key={section.id}
                    />
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
      <div className="relative h-full">
        <Image
          src={getCurrentImage()}
          alt="medical staff"
          fill
          className="object-cover rounded-tr-xl rounded-br-xl transition-all ease-in-out duration-500"
          priority
        />
      </div>
    </div>
  );
};

export default SurveyForm;
