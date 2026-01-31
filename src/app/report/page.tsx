import SurveyReport from "@/components/SurveyReport";
import React from "react";
import LogoutButton from "@/components/auth/logout-button";

const ReportPage = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-end w-full px-4 pt-4">
        <LogoutButton />
      </div>
      <SurveyReport />
    </div>
  );
};


export default ReportPage;
