/* eslint-disable @typescript-eslint/no-explicit-any */
"use query";
import { getDepartmentsByBranch } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { Label } from "./ui/label";
import { LoaderCircle } from "lucide-react";
type DepartmentType = {
  value: string;
  label: string;
};

type DepartmentsProps = {
  id: string;
  setSelectedDepartment: (department: string) => void;
  selectedDepartment: string;
  section?: string;
  initialData?: any;
};
const Departments: React.FC<DepartmentsProps> = ({
  id,
  selectedDepartment,
  setSelectedDepartment,
  section,
  initialData,
}) => {
  const [selectedOption, setSelectedOption] = useState<DepartmentType | null>(() => {
    const saved = localStorage.getItem("selectedDepartment");
    return saved ? JSON.parse(saved) : null;
  });

  const { error, isError, isLoading, data } = useQuery({
    queryKey: ["Departments", id],
    queryFn: () => getDepartmentsByBranch(id),
    enabled: !!id,
    gcTime: 1000 * 60 * 60,
    initialData,
  });

  useEffect(() => {
    if (section === "Nhân viên CSKH") {
      if (id === "00") setSelectedDepartment("cm5uo3iqq0002114hymbr98v6");
      if (id === "01") setSelectedDepartment("cm5uo3iqq0002114hymbr98v9");
      if (id === "02") setSelectedDepartment("cm5uo3iqq0002114hymbr98v8");
      if (id === "03") setSelectedDepartment("cm5uo3iqq0002114hymbr98v7");
    }
    if (selectedDepartment && data) {
      const department = data.find((d: any) => d.value === selectedDepartment);
      if (department) {
        setSelectedOption(department);
      }
    }
  }, [selectedDepartment, selectedOption, data, section, id, setSelectedDepartment]);

  const handleChange = (newValue: SingleValue<DepartmentType>) => {
    if (newValue) {
      setSelectedOption(newValue);
      setSelectedDepartment(newValue.value);
      localStorage.setItem("selectedDepartment", JSON.stringify(newValue));
    }
  };
  if (isLoading)
    return (
      <div>
        Đang lấy dữ liệu ... <LoaderCircle className="animate-spin w-4 h-4" />
      </div>
    );
  if (isError) return <div>Something when wrong: {error.message}</div>;
  return (
    <div>
      <div className="mb-3">
        <Label className="text-2xl text-violet-500 font-semibold">Vui lòng chọn Phòng khám thực hiện</Label>
      </div>
      <div>
        {data && data.length == 0 && <div className="font-medium px-1">Chưa có dữ liệu</div>}
        {data && data?.length > 0 && <Select value={selectedOption} onChange={handleChange} options={data} />}
      </div>
    </div>
  );
};

export default Departments;
