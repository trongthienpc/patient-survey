"use client";
import { useSelection } from "@/providers/SelectionContext";
import { SelectedSheet } from "./SeletedSheet";
import { useSurvey } from "./survey/useSurvey";
import { FileSearch2 } from "lucide-react";
import Link from "next/link";

const SelectedData = () => {
  const { selectedBranch, selectedUser, selectedDepartment } = useSelection();
  const { isLoading } = useSurvey();

  if (isLoading) return null;

  return (
    <div className="flex justify-between items-center py-4 px-2 gap-3 w-full mb-4">
      <div className="text-base text-gray-700 font-medium flex gap-4 items-center">
        <span className="bg-primary/10 text-primary border border-primary/20 rounded-md px-3 py-2 flex items-center gap-2 text-lg">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          {selectedBranch?.label ?? "Chưa chọn"}
        </span>

        {selectedUser && (
          <span className="bg-primary text-white border border-primary/20 rounded-md px-3 py-2  md:inline-block text-lg">
            {selectedUser.label} ({selectedDepartment?.label})
          </span>
        )}
      </div>
      <div className="flex gap-3 items-center">
        <SelectedSheet />
        <Link href={"/report"}>
          <div className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <FileSearch2 className="text-primary w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SelectedData;
