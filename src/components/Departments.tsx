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
};
const Departments: React.FC<DepartmentsProps> = ({
  id,
  selectedDepartment,
  setSelectedDepartment,
}) => {
  const [selectedOption, setSelectedOption] = useState<DepartmentType | null>(
    () => {
      const saved = localStorage.getItem("selectedDepartment");
      return saved ? JSON.parse(saved) : null;
    }
  );

  const { error, isError, isLoading, data } = useQuery({
    queryKey: ["Departments", id],
    queryFn: () => getDepartmentsByBranch(id),
    enabled: !!id,
    gcTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    if (selectedDepartment && !selectedOption && data) {
      const department = data.find((d) => d.value === selectedDepartment);
      if (department) {
        setSelectedOption(department);
      }
    }
  }, [selectedDepartment, selectedOption, data]);

  const handleChange = (newValue: SingleValue<DepartmentType>) => {
    if (newValue) {
      setSelectedOption(newValue);
      setSelectedDepartment(newValue.value);
      localStorage.setItem("selectedDepartment", JSON.stringify(newValue));

      // Clear doctor selection
      localStorage.removeItem("selectedDoctor");
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
        <Label className="text-2xl text-violet-500 font-semibold">
          Vui lòng chọn Phòng khám thực hiện
        </Label>
      </div>
      <div>
        {data && data.length == 0 && (
          <div className="font-medium px-1">Chưa có dữ liệu</div>
        )}
        {data && data?.length > 0 && (
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={data}
          />
        )}
      </div>
    </div>
  );
};

export default Departments;
