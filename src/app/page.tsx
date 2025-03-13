import SelectedData from "@/components/SelectedData";
import SurveyForm from "@/components/survey/SurveyForm";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <SelectedData />
      <SurveyForm />
    </div>
  );
}
