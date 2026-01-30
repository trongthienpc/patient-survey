import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Textarea } from "@/components/ui/textarea";
import { Question } from "@/types";
import { cn } from "@/lib/utils";
import { OTHER_COMMENT } from "@/constants";

interface MultipleChoiceQuestionProps {
  id: string;
  question: string;
  options: Question[];
  onAnswerChange: (answers: {
    selectedOptions: string[];
    feedback: string;
  }) => void;
  initialAnswer: string[] | undefined;
}
const MultipleChoiceQuestion = ({
  question,
  options,
  onAnswerChange,
  initialAnswer,
}: MultipleChoiceQuestionProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    if (initialAnswer) setSelectedOptions(initialAnswer);
  }, [initialAnswer]);

  const toggleOption = (option: Question) => {
    const updatedOptions = selectedOptions.includes(option.value)
      ? selectedOptions.filter((item) => item !== option.value)
      : [...selectedOptions, option.value];
    setSelectedOptions(updatedOptions);
    onAnswerChange({ selectedOptions: updatedOptions, feedback });
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedFeedback = e.target.value;
    setFeedback(updatedFeedback);
    onAnswerChange({ selectedOptions, feedback: updatedFeedback });
  };

  return (
    <div className="my-2 h-full px-1">
      <p className={cn("mb-4 text-xl sm:text-2xl font-semibold text-primary")}>
        {question}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
        {options.map((option) => (
          <div
            className="flex items-stretch justify-center w-full"
            key={option.key}
          >
            <div
              onClick={() => toggleOption(option)}
              className={cn(
                "w-full px-4 flex items-center justify-start space-x-4 text-left min-h-[100px] sm:min-h-[112px] py-4 rounded-xl border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]",
                selectedOptions.includes(option.value)
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-100 hover:border-primary/50 hover:bg-gray-50",
              )}
            >
              <div className="flex-shrink-0">
                <Lottie
                  animationData={option.iconPath}
                  loop={true}
                  style={{ width: "50px", height: "50px" }}
                  className="sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <span className="text-base sm:text-lg font-medium text-left leading-tight break-words">
                {option.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      {selectedOptions.includes(OTHER_COMMENT) && (
        <Textarea
          placeholder="Nhập ý kiến của bạn ..."
          value={feedback}
          onChange={handleFeedbackChange}
          rows={4}
          className="p-4 w-full mt-4 border-gray-200 focus:border-primary focus:ring-primary rounded-xl text-lg resize-none shadow-sm"
        />
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;
