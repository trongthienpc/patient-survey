"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import angryAnimation from "@/data/animations/angry.json";
import sadAnimation from "@/data/animations/sad.json";
import mehAnimation from "@/data/animations/normal.json";
import happyAnimation from "@/data/animations/happy.json";
import veryHappyAnimation from "@/data/animations/supprise.json";
interface SatisfactionRatingProps {
  question: string;
  initialAnswer: string | undefined;
  onAnswerChange: (answer: string) => void;
}

interface Rating {
  level: string;
  animationData: unknown;
  label: string;
}
export const ratings: Rating[] = [
  {
    level: "very_dissatisfied",
    animationData: angryAnimation,
    label: "Rất không hài lòng",
  },
  {
    level: "dissatisfied",
    animationData: sadAnimation,
    label: "Không hài lòng",
  },
  {
    level: "neutral",
    animationData: mehAnimation,
    label: "Bình thường",
  },
  {
    level: "satisfied",
    animationData: happyAnimation,
    label: "Hài lòng",
  },
  {
    level: "very_satisfied",
    animationData: veryHappyAnimation,
    label: "Rất hài lòng",
  },
];

const SatisfactionRating = ({
  question,
  onAnswerChange,
  initialAnswer,
}: SatisfactionRatingProps) => {
  const [rating, setRating] = useState<string | undefined>(undefined);

  useEffect(() => {
    setRating(initialAnswer);
  }, [initialAnswer]);

  const handleRatingChange = (level: string) => {
    setRating(level);
    onAnswerChange(level);
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-lg sm:text-2xl mb-4 sm:mb-6 text-primary">
        {question}
      </h2>{" "}
      <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 w-full">
        {ratings.map(({ level, animationData, label }) => (
          <button
            key={level}
            type="button"
            className={`w-full last:col-span-2 md:last:col-span-1 p-2 sm:p-3 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 border-2 aspect-square md:aspect-auto md:h-auto min-h-[calc(90px*var(--ui-scale))] sm:min-h-[calc(110px*var(--ui-scale))] ${
              rating === level
                ? "bg-primary/10 border-primary shadow-inner scale-[1.02]"
                : "bg-white border-transparent hover:bg-gray-50 hover:shadow-md active:scale-95"
            }`}
            onClick={() => handleRatingChange(level)}
          >
            <div className="transform transition-transform duration-300 group-hover:scale-110 mb-2 sm:mb-3">
              <Lottie
                animationData={animationData}
                className="w-12 h-12 sm:w-[calc(75px*var(--ui-scale))] sm:h-[calc(75px*var(--ui-scale))]"
              />
            </div>
            <div
              className={`text-center text-xs sm:text-base lg:text-lg font-medium leading-tight ${rating === level ? "text-primary" : "text-gray-600"}`}
            >
              {label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SatisfactionRating;
