import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Textarea } from "@/components/ui/textarea";
import { Question } from "@/types";
import { cn } from "@/lib/utils";
import { OTHER_COMMENT } from "@/constants";
import { ChevronDown } from "lucide-react";

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
  const shouldShowScrollHint = options.length >= 6;

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
    <div className="my-2 px-1">
      <p className={cn("mb-4 text-lg sm:text-2xl font-semibold text-primary")}>
        {question}
      </p>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 pr-[calc(1.5rem*var(--ui-scale))]">
          {options.map((option) => (
            <div
              className="flex items-stretch justify-center w-full"
              key={option.key}
            >
              <div
                onClick={() => toggleOption(option)}
                className={cn(
                  "w-full px-3 sm:px-4 flex items-center justify-start space-x-3 sm:space-x-4 text-left min-h-[calc(60px*var(--ui-scale))] sm:min-h-[calc(80px*var(--ui-scale))] py-2 sm:py-3 rounded-xl border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]",
                  selectedOptions.includes(option.value)
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-100 hover:border-primary/50 hover:bg-gray-50",
                )}
              >
                <div className="flex-shrink-0">
                  <Lottie
                    animationData={option.iconPath}
                    loop={true}
                    style={{
                      width: "calc(40px * var(--ui-scale))",
                      height: "calc(40px * var(--ui-scale))",
                    }}
                    className="sm:w-[calc(60px*var(--ui-scale))] sm:h-[calc(60px*var(--ui-scale))]"
                  />
                </div>
                <span className="flex-1 text-sm sm:text-lg font-medium text-left leading-tight break-words">
                  {option.value}
                </span>
              </div>
            </div>
          ))}
        </div>
        {shouldShowScrollHint && (
          <div className="absolute -right-10 top-1/4 -translate-y-1/2 text-gray-400">
            <div className="flex flex-col items-center gap-[calc(0.25rem*var(--ui-scale))]">
              <span className="text-[calc(0.7rem*var(--ui-scale))] tracking-wide">
                SCROLL
              </span>
              <div className="scroll-down-linear flex flex-col items-center">
                <ChevronDown className="w-4 h-4" />
                <ChevronDown className="-mt-2 w-4 h-4 opacity-70" />
              </div>
            </div>
          </div>
        )}
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
