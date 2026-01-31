interface SurveyQuestionsProps {
  renderQuestion: () => JSX.Element;
}

const SurveyQuestions: React.FC<SurveyQuestionsProps> = ({ renderQuestion }) => {
  return <div className="flex flex-col gap-4 md:gap-6 px-1 pb-4 max-w-3xl mx-auto w-full">{renderQuestion()}</div>;
};

export default SurveyQuestions;
