import SurveyForm from "@/components/SurveyForm";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <SurveyForm />
    </div>
  );
}
