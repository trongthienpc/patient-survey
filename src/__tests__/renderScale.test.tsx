import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { calculateRenderMetrics, DESIGN_ACTUAL_RESOLUTION } from "@/lib/utils";
import SatisfactionRating from "@/components/SatisfactionRating";
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion";
import SurveyNavigation from "@/components/survey/SurveyNavigation";

vi.mock("lottie-react", () => ({
  default: ({
    className,
    style,
  }: {
    className?: string;
    style?: React.CSSProperties;
  }) => <div data-testid="lottie" className={className} style={style} />,
}));

describe("calculateRenderMetrics", () => {
  it("tính đúng actual resolution và scale với DPR 1.33", () => {
    const metrics = calculateRenderMetrics({
      screen: { width: 962, height: 601 },
      viewport: { width: 961, height: 601 },
      dpr: 1.33,
      design: DESIGN_ACTUAL_RESOLUTION,
    });

    expect(metrics.actual).toEqual({ width: 1279, height: 800 });
    expect(metrics.cssScale).toBeCloseTo(1, 3);
  });
});

describe("ui scale classes", () => {
  it("gắn var(--ui-scale) cho các kích thước cố định", () => {
    const { container, getByText } = render(
      <div>
        <SatisfactionRating
          question="Bạn hài lòng thế nào?"
          initialAnswer={undefined}
          onAnswerChange={() => {}}
        />
        <MultipleChoiceQuestion
          id="test"
          question="Bạn hài lòng về điều gì?"
          options={[
            { key: 1, value: "Option A", iconPath: {} },
            { key: 2, value: "Option B", iconPath: {} },
          ]}
          initialAnswer={[]}
          onAnswerChange={() => {}}
        />
        <SurveyNavigation
          currentQuestionIndex={0}
          handleNavigation={() => {}}
          handleSubmit={() => {}}
          isMutating={false}
        />
      </div>,
    );

    const ratingButton = container.querySelector("button");
    expect(ratingButton?.className).toContain(
      "min-h-[calc(90px*var(--ui-scale))]",
    );

    const optionText = getByText("Option A");
    const optionWrapper = optionText.closest("div");
    expect(optionWrapper?.className).toContain(
      "min-h-[calc(60px*var(--ui-scale))]",
    );

    expect(container.innerHTML).toContain("min-w-[calc(90px*var(--ui-scale))]");
  });
});
