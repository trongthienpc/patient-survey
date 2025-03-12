import SelectedData from "@/components/SelectedData";
import SurveyForm from "@/components/SurveyForm";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="h-full overflow-hidden flex flex-col gap-2">
      <SelectedData />
      <SurveyForm />
    </div>
  );
}
