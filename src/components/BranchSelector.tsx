"use client";
import React from "react";
import Select, { SingleValue } from "react-select";
import { Label } from "./ui/label";
import { useSelection } from "@/providers/SelectionContext";

type BranchType = {
  value: string;
  label: string;
};

const branches: BranchType[] = [
  { value: "00", label: "Phương Châu Cần Thơ" },
  { value: "01", label: "Phương Châu Sa Đéc" },
  { value: "02", label: "Phương Châu Sóc Trăng" },
  { value: "03", label: "Phương Nam" },
];

const BranchSelector = () => {
  const { selectedBranch, setSelectedBranch } = useSelection();

  const handleChange = (newValue: SingleValue<BranchType>) => {
    if (newValue) {
      localStorage.setItem("selectedBranch", JSON.stringify(newValue));
      setSelectedBranch(newValue);
    } else {
      setSelectedBranch(null);
    }
  };

  return (
    <div className="w-full">
      <Label>Chi nhánh</Label>
      <Select
        value={branches.find((branch) => branch.label === selectedBranch?.label) || null}
        onChange={handleChange}
        options={branches}
      />
    </div>
  );
};

export default BranchSelector;
