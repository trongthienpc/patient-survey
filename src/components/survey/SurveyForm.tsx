"use client";
import Image from "next/image";
import ThankYouPage from "@/app/thank-you/page";
import { useSurvey } from "./useSurvey";
import SurveyQuestions from "./SurveyQuestions";
import SurveyNavigation from "./SurveyNavigation";
import BoxReveal from "../magic-ui/box-reveal";
import { LoaderCircle } from "lucide-react";

const SurveyForm = () => {
  const {
    currentQuestionIndex,
    isSubmitted,
    renderQuestion,
    handleNavigation,
    handleSubmit,
    getCurrentImage,
    isLoading,
    isMutating,
  } = useSurvey();

  if (isLoading)
    return (
      <div>
        <LoaderCircle className="animate-spin w-12 h-12" />
      </div>
    );

  return (
    <div className="border border-dashed rounded-xl border-teal-500 grid grid-cols-1 lg:grid-cols-3">
      {/* Khối khảo sát */}
      <div className="lg:col-span-2 flex flex-col">
        <div className="bg-gray-100 rounded-xl lg:rounded-tr-none lg:rounded-br-none p-4 lg:p-6 overflow-scroll">
          <div>
            {isSubmitted ? (
              <ThankYouPage />
            ) : (
              <div className="flex flex-col">
                <div className="py-6">
                  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <div className="font-semibold px-3 text-2xl sm:text-3xl lg:text-[2rem] leading-[1.2] lg:leading-[2.5rem]">
                      Khảo sát độ hài lòng khách hàng
                      <span className="text-[#5046e6]">.</span>
                    </div>
                  </BoxReveal>
                </div>
                {/* Câu hỏi khảo sát */}
                <div className="overflow-auto ">
                  <SurveyQuestions renderQuestion={renderQuestion} />
                </div>
                {/* Navigation */}
                <div className="mt-auto pb-4">
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

      {/* Hình ảnh (ẩn trên mobile, hiển thị ở lg trở lên) */}
      <div className="hidden lg:block relative h-full">
        <Image
          src={getCurrentImage()}
          alt="medical staff"
          fill
          className="object-cover rounded-tr-xl rounded-br-xl transition-all duration-500"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default SurveyForm;
