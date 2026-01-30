/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useMemo } from "react";
import { toast } from "sonner";
import { useSelection } from "@/providers/SelectionContext";
import {
  dissatisfiedWithExamination,
  dissatisfiedWithServiceCare,
  dissatisfiedWithUltrasound,
  satisfiedWithExamination,
  satisfiedWithServiceCare,
  satisfiedWithUltrasound,
} from "@/data/questions";
import { Answers, SurveyAnswer, SurveyResponse } from "@/types";
import SatisfactionRating from "../SatisfactionRating";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import { useSubmitSurvey } from "@/hooks/useSubmitSurvey";

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

export const useSurvey = () => {
  const { selectedDepartment, selectedUser, selectedBranch } = useSelection();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { trigger, isMutating } = useSubmitSurvey();

  const isLoading = useMemo(
    () => !selectedDepartment || !selectedUser,
    [selectedDepartment, selectedUser],
  );

  const handleAnswerChange = useCallback(
    (questionId: string, answer: Partial<SurveyAnswer>) => {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: { ...prev[questionId], ...answer },
      }));
    },
    [],
  );

  const sectionImages: any = {
    "Bác sĩ khám": "/doctor-1.jpg",
    "Bác sĩ siêu âm": "/doctor-2.jpg",
    "Nhân viên CSKH": "/care.jpg",
  };

  const getCurrentImage = () => {
    return sectionImages[selectedDepartment?.label] || "/nurse.webp";
  };

  const handleNavigation = (direction: "next" | "back") => {
    if (direction === "next") {
      const questionId = `${selectedDepartment?.label}-Q.${currentQuestionIndex}`;
      const currentAnswer = answers[questionId];

      if (
        !currentAnswer ||
        (!currentAnswer.rating &&
          (!currentAnswer.selectedOptions ||
            currentAnswer.selectedOptions.length === 0))
      ) {
        toast.warning("Vui lòng trả lời câu hỏi trước khi sang câu khác");
        return;
      }

      setCurrentQuestionIndex((prev) => (prev < 1 ? prev + 1 : prev));
    } else {
      setCurrentQuestionIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const transformSurveyData = (answers: Answers): SurveyResponse => {
    const departments = new Set<string>();

    const response: SurveyResponse = {
      user: "",
      department: "",
      branch: "",
      rating: undefined,
      selectedOptions: [],
      feedback: "",
      createdAt: new Date(),
    };

    for (const [questionId, answer] of Object.entries(answers)) {
      const [department] = questionId.split("-Q.");
      departments.add(department);

      if (answer.rating) {
        response.rating = answer.rating;
      }

      if (answer.selectedOptions && answer.selectedOptions.length > 0) {
        response.selectedOptions.push(...answer.selectedOptions);
      }

      if (answer.feedback) {
        response.feedback = answer.feedback;
      }
    }

    response.department = Array.from(departments).join(", "); // Trong trường hợp có nhiều khoa phòng
    response.user = selectedUser;
    response.branch = selectedBranch;

    return response;
  };

  const handleSubmit = async () => {
    if (!selectedDepartment) return;

    const questionKeys = [
      `${selectedDepartment?.label}-Q.0`,
      `${selectedDepartment?.label}-Q.1`,
    ];

    const hasUnanswered = questionKeys.some((questionId) => {
      const answer = answers[questionId];

      if (!answer) return true; // Chưa có câu trả lời

      if (questionId.endsWith("Q.1")) {
        // Nếu là câu hỏi Q.1 (chọn lý do hài lòng/không hài lòng)
        if (
          (!answer.selectedOptions || answer.selectedOptions.length === 0) &&
          answer.feedback === ""
        )
          return true; // Không chọn gì
      }

      return false;
    });

    if (hasUnanswered) {
      toast.warning(
        "Vui lòng trả lời đầy đủ tất cả các câu hỏi trước khi gửi.",
      );
      return;
    }

    const surveyData = transformSurveyData(answers);
    await trigger(surveyData);
    setIsSubmitted(true);
  };

  const renderQuestion = () => {
    if (!selectedDepartment) return <p>Loading...</p>;

    const questionId = `${selectedDepartment?.label}-Q.${currentQuestionIndex}`;
    const currentAnswer = answers[questionId];

    if (currentQuestionIndex === 0) {
      return (
        <SatisfactionRating
          key="satisfaction"
          question={`Bạn hài lòng thế nào với ${selectedDepartment?.label}?`}
          initialAnswer={currentAnswer?.rating}
          onAnswerChange={(rating) =>
            handleAnswerChange(questionId, { rating })
          }
        />
      );
    }
    const isDissatisfied = [
      "very_dissatisfied",
      "dissatisfied",
      "neutral",
    ].includes(answers[`${selectedDepartment?.label}-Q.0`]?.rating || "");

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

  return {
    selectedDepartment,
    currentQuestionIndex,
    isSubmitted,
    isLoading,
    renderQuestion,
    handleNavigation,
    handleSubmit,
    getCurrentImage,
    isMutating,
  };
};
