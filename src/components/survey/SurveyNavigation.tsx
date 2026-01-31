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
    <div className="flex justify-between items-center w-full max-w-4xl mx-auto gap-3 sm:gap-4 px-1">
      <Button
        className="text-sm xs:text-base md:text-base px-4 sm:px-6 h-10 xs:h-11 md:h-12 rounded-xl min-w-[calc(90px*var(--ui-scale))] xs:min-w-[calc(100px*var(--ui-scale))] transition-all hover:bg-slate-100 hover:text-primary hover:border-primary/50"
        onClick={() => handleNavigation("back")}
        disabled={currentQuestionIndex === 0}
        variant="outline"
      >
        Quay lại
      </Button>
      {currentQuestionIndex === 1 ? (
        <Button
          className="text-sm xs:text-base md:text-base px-6 sm:px-8 h-10 xs:h-11 md:h-12 rounded-xl min-w-[calc(120px*var(--ui-scale))] xs:min-w-[calc(140px*var(--ui-scale))] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
          onClick={handleSubmit}
          disabled={isMutating}
        >
          {isMutating ? "Đang gửi..." : "Hoàn thành"}
        </Button>
      ) : (
        <Button
          className="text-sm xs:text-base md:text-base px-6 sm:px-8 h-10 xs:h-11 md:h-12 rounded-xl min-w-[calc(120px*var(--ui-scale))] xs:min-w-[calc(140px*var(--ui-scale))] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
          onClick={() => handleNavigation("next")}
        >
          Tiếp tục
        </Button>
      )}
    </div>
  );
};

export default SurveyNavigation;
