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

const SatisfactionRating = ({
  question,
  onAnswerChange,
  initialAnswer,
}: SatisfactionRatingProps) => {
  const [rating, setRating] = useState<string | undefined>(undefined);

  useEffect(() => {
    setRating(initialAnswer);
  }, [initialAnswer]);

  const ratings: Rating[] = [
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

  const handleRatingChange = (level: string) => {
    setRating(level);
    onAnswerChange(level);
  };

  return (
    <div className="w-full overflow-scroll">
      <h2 className="font-bold text-2xl mb-6 text-violet-500">{question}</h2>{" "}
      <div className="grid grid-cols-5 gap-6">
        {ratings.map(({ level, animationData, label }) => (
          <button
            key={level}
            className={`p-2 rounded-lg flex flex-col items-center ${
              rating === level ? "bg-gray-200" : ""
            }`}
            onClick={() => handleRatingChange(level)}
          >
            <Lottie animationData={animationData} style={{ width: 100 }} />
            <div className="text-center mt-9 text-xl font-semibold">
              {label}
            </div>{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SatisfactionRating;
