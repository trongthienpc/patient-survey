import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
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
  id,
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
    <div className="my-4">
      <p
        className={cn(
          "mb-3 text-2xl font-semibold",
          id === "satisfied" ? "text-violet-500" : "text-amber-500"
        )}
      >
        {question}
      </p>
      <div className="grid lg:grid-cols-2 gap-3">
        {options.map((option) => (
          <div className="flex items-center space-x-2 w-full" key={option.key}>
            <Button
              variant={
                selectedOptions.includes(option.value) ? "default" : "outline"
              }
              onClick={() => toggleOption(option)}
              className="w-full flex items-center justify-start space-x-2 text-wrap text-left h-24 border border-dashed border-violet-500"
            >
              <Lottie
                animationData={option.iconPath}
                loop={true}
                style={{ width: "60px", height: "60px" }}
              />
              <span className="text-xl font-normal">{option.value}</span>
            </Button>
          </div>
        ))}
      </div>
      {selectedOptions.includes(OTHER_COMMENT) && (
        <Textarea
          placeholder="Nhập ý kiến của bạn ..."
          value={feedback}
          onChange={handleFeedbackChange}
          rows={4}
          className="p-6 w-full mt-3 border-[#6969ff] border-dashed border-2 focus-visible:ring-0"
          style={{ fontSize: "1.25rem" }}
        />
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;
