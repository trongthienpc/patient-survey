"use client";
import { useSelection } from "@/providers/SelectionContext";
import { SelectedSheet } from "./SeletedSheet";
import { useSurvey } from "./survey/useSurvey";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

const SelectedData = () => {
  const { selectedBranch, selectedUser, selectedDepartment } = useSelection();
  const { isLoading } = useSurvey();

  if (isLoading) return null;

  return (
    <div className="flex justify-between items-center py-6 px-1 gap-3 w-full">
      <div className="text-xl text-white font-semibold flex gap-6 text-center">
        <span className="text-white border bg-green-500 border-dashed rounded p-1 ">
          {selectedBranch?.label ?? "Chưa chọn"}
        </span>

        {selectedUser && (
          <span className="text-white border bg-amber-500 border-dashed rounded p-1">
            {selectedUser.label} ({selectedDepartment?.label})
            <br />
          </span>
        )}
      </div>
      <div className="flex gap-3">
        <SelectedSheet />
        <Link href={"/report"}>
          <MessageSquare className="text-white cursor-pointer w-8 h-8" />
        </Link>
      </div>
    </div>
  );
};

export default SelectedData;
