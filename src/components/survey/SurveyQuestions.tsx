interface SurveyQuestionsProps {
  renderQuestion: () => JSX.Element;
}

const SurveyQuestions: React.FC<SurveyQuestionsProps> = ({ renderQuestion }) => {
  return <div className="max-h-[720px] flex flex-col gap-9 px-3">{renderQuestion()}</div>;
};

export default SurveyQuestions;
