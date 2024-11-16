import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Question } from "@/types";

interface MultipleChoiceQuestionProps {
  question: string;
  options: Question[];
  onAnswerChange: (answers: {
    selectedOptions: number[];
    feedback: string;
  }) => void;
  initialAnswer: number[] | undefined;
}
const MultipleChoiceQuestion = ({
  question,
  options,
  onAnswerChange,
  initialAnswer,
}: MultipleChoiceQuestionProps) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    if (initialAnswer) setSelectedOptions(initialAnswer);
  }, [initialAnswer]);

  const toggleOption = (option: number) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
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
      <p className="mb-3 text-2xl font-semibold">{question}</p>
      <div className="grid lg:grid-cols-2 gap-3">
        {options.map((option) => (
          <div className="flex items-center space-x-2" key={option.key}>
            <Button
              variant={
                selectedOptions.includes(option.key) ? "default" : "outline"
              }
              onClick={() => toggleOption(option.key)}
              className=" flex items-center justify-start space-x-2 text-wrap text-left h-24"
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
      {selectedOptions.includes(6) && (
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
