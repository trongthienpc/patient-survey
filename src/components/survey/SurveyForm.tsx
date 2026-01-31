"use client";

import ThankYouPage from "@/app/thank-you/page";
import { useSurvey } from "./useSurvey";
import SurveyQuestions from "./SurveyQuestions";
import SurveyNavigation from "./SurveyNavigation";
import BoxReveal from "../magic-ui/box-reveal";
import { SelectedSheet } from "../SeletedSheet";
import { Card } from "@/components/ui/card";

const SurveyForm = () => {
  const {
    currentQuestionIndex,
    isSubmitted,
    renderQuestion,
    handleNavigation,
    handleSubmit,
    isLoading,
    isMutating,
  } = useSurvey();

  // Nếu delay kết thúc và isLoading = true, thì mở SelectedSheet
  if (isLoading) {
    return <SelectedSheet />;
  }
  return (
    <Card className="w-full h-full md:flex-1 overflow-hidden border-0 shadow-lg sm:shadow-2xl bg-white/95 backdrop-blur-sm rounded-sm flex flex-col ring-1 ring-gray-900/5">
      <div className="flex flex-col h-full">
        {/* Khối khảo sát */}
        <div className="w-full flex flex-col h-full bg-white relative z-10">
          <div className="p-3 xs:p-4 sm:p-4 md:p-4 flex flex-col h-full overflow-hidden">
            <div className="flex-1 flex flex-col min-h-0">
              {isSubmitted ? (
                <ThankYouPage />
              ) : (
                <div className="flex flex-col h-full max-w-4xl mx-auto w-full">
                  <div className="pb-2 sm:pb-3 flex-none">
                    <BoxReveal boxColor={"#a54687"} duration={0.5}>
                      <h2 className="font-bold text-lg xs:text-xl sm:text-2xl leading-tight text-gray-900 tracking-tight">
                        Khảo sát độ hài lòng
                        <span className="text-primary">.</span>
                      </h2>
                    </BoxReveal>
                    <p className="text-gray-500 mt-2 text-sm xs:text-base font-medium">
                      Ý kiến của bạn giúp chúng tôi phục vụ tốt hơn
                    </p>
                  </div>

                  {/* Câu hỏi khảo sát */}
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar -mr-2">
                    <SurveyQuestions renderQuestion={renderQuestion} />
                  </div>

                  {/* Navigation */}
                  <div className="mt-4 pt-4 border-t border-gray-100 bg-white flex-none">
                    <SurveyNavigation
                      currentQuestionIndex={currentQuestionIndex}
                      handleNavigation={handleNavigation}
                      handleSubmit={handleSubmit}
                      isMutating={isMutating}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SurveyForm;
