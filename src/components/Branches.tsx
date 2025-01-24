"use query";
import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { Label } from "./ui/label";

type BranchType = {
  value: string;
  label: string;
};

// define a set state function for the Branches component
type BranchesType = {
  setSelectedBranch: (branch: string) => void;
  selectedBranch: string;
};

const branches: BranchType[] = [
  { value: "00", label: "Phương Châu Cần Thơ" },
  { value: "01", label: "Phương Châu Sa Đéc" },
  { value: "02", label: "Phương Châu Sóc Trăng" },
  { value: "03", label: "Phương Châu Sài Gòn" },
];
const Branches: React.FC<BranchesType> = ({
  setSelectedBranch,
  selectedBranch,
}) => {
  const [selectedOption, setSelectedOption] = useState<BranchType | null>(
    () => {
      const saved = localStorage.getItem("selectedBranch");
      return saved ? JSON.parse(saved) : null;
    }
  );

  useEffect(() => {
    if (selectedBranch && !selectedOption) {
      const branch = branches.find((b) => b.value === selectedBranch);
      if (branch) {
        setSelectedOption(branch);
      }
    }
  }, [selectedBranch, selectedOption]);

  // When the selected option changes, cache it to localStorage
  const handleChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    if (newValue) {
      setSelectedOption(newValue);
      setSelectedBranch(newValue.value);
      localStorage.setItem("selectedBranch", JSON.stringify(newValue)); // Store selected option in localStorage
    } else {
      setSelectedOption(null);
      localStorage.removeItem("selectedBranch"); // Remove from localStorage if null
    }
  };

  return (
    <div>
      <div className="mb-3">
        <Label className="text-2xl text-violet-500 font-semibold">
          Vui lòng chọn Chi nhánh thực hiện
        </Label>
      </div>
      <div>
        {branches && branches?.length > 0 && (
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={branches}
          />
        )}
      </div>
    </div>
  );
};

export default Branches;
