import SelectedData from "@/components/SelectedData";
import SurveyForm from "@/components/survey/SurveyForm";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";
export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center relative">
      <SelectedData />
      <SurveyForm />
    </div>
  );
}
