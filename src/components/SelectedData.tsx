"use client";
import { useSelection } from "@/providers/SelectionContext";
import { SelectedSheet } from "./SeletedSheet";

const SelectedData = () => {
  const { selectedBranch, selectedUser, selectedDepartment } = useSelection();

  return (
    <div className="flex justify-between items-center p-3 gap-3">
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
      <SelectedSheet />
    </div>
  );
};

export default SelectedData;
