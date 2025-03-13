import { Button } from "@/components/ui/button";

interface SurveyNavigationProps {
  currentQuestionIndex: number;
  handleNavigation: (direction: "next" | "back") => void;
  handleSubmit: () => void;
  isMutating: boolean;
}

const SurveyNavigation: React.FC<SurveyNavigationProps> = ({
  currentQuestionIndex,
  handleNavigation,
  handleSubmit,
  isMutating,
}) => {
  return (
    <div className="flex justify-between mt-4">
      <Button
        className="text-xl px-6 h-12 bg-[#5046e6] hover:bg-[#6969ff]"
        onClick={() => handleNavigation("back")}
        disabled={currentQuestionIndex === 0}
      >
        Back
      </Button>
      {currentQuestionIndex === 1 ? (
        <Button
          className="text-xl px-6 h-12 bg-[#5046e6] hover:bg-[#6969ff]"
          onClick={handleSubmit}
          disabled={isMutating}
        >
          {isMutating ? "Submitting" : "Submit"}
        </Button>
      ) : (
        <Button className="text-xl px-6 h-12 bg-[#5046e6] hover:bg-[#6969ff]" onClick={() => handleNavigation("next")}>
          Next
        </Button>
      )}
    </div>
  );
};

export default SurveyNavigation;
