/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Ensure this runs only on the client

import React from "react";
import Select, { SingleValue } from "react-select";
import { Label } from "./ui/label";
import { SELECTED_DEPARTMENT } from "@/lib/constants";
import { useSelection } from "@/providers/SelectionContext";

type DepartmentType = {
  value: string;
  label: string;
};

const departments: DepartmentType[] = [
  { value: "Bác sĩ khám", label: "Bác sĩ khám" },
  { value: "Bác sĩ siêu âm", label: "Bác sĩ siêu âm" },
  { value: "Nhân viên CSKH", label: "Nhân viên CSKH" },
];

const DepartmentSelector = () => {
  const { selectedDepartment, setSelectedDepartment } = useSelection();

  const handleChange1 = (newValue: SingleValue<DepartmentType>) => {
    if (newValue) {
      localStorage.setItem(SELECTED_DEPARTMENT, JSON.stringify(newValue));
      setSelectedDepartment(newValue);
    }
  };

  return (
    <div>
      <div className="">
        <Label className="">Khoa phòng</Label>
      </div>
      <Select
        value={departments.find((dep) => dep.value === selectedDepartment?.value) || null}
        onChange={handleChange1}
        options={departments}
      />
    </div>
  );
};

export default DepartmentSelector;
