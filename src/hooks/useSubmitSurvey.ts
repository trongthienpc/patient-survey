import { submitSurvey } from "@/app/actions";
import { SurveyResponse } from "@/types";
import useSWRMutation from "swr/mutation";

const submitSurveyRequest = async (_: string, { arg }: { arg: SurveyResponse }) => {
  return submitSurvey(arg);
};

export function useSubmitSurvey() {
  return useSWRMutation("surveySubmit", submitSurveyRequest);
}
