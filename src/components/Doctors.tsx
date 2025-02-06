"use query";
import { getDoctorByBranch } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { Label } from "./ui/label";
import { LoaderCircle } from "lucide-react";
type DoctorType = {
  value: string;
  label: string;
};

type DoctorsProps = {
  id: string;
  setSelectedDoctor: (doctor: string) => void;
  selectedDoctor: string;
  section: string;
};
const Doctors: React.FC<DoctorsProps> = ({
  id,
  selectedDoctor,
  setSelectedDoctor,
  section,
}) => {
  const [selectedOption, setSelectedOption] = useState<DoctorType | null>(
    () => {
      const saved = localStorage.getItem("selectedDoctor");
      return saved ? JSON.parse(saved) : null;
    }
  );

  const { error, isError, isLoading, data } = useQuery({
    queryKey: ["doctors", id, section],
    queryFn: async () => {
      const doctors = await getDoctorByBranch(id, section);
      return doctors.map((doctor: { value: string; label: string | null }) => ({
        ...doctor,
        label: doctor.label || "",
      }));
    },
    enabled: !!id,
    gcTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    if (selectedDoctor && !selectedOption && data) {
      const doctor = data.find((d) => d.value === selectedDoctor) as DoctorType;
      if (doctor) {
        setSelectedOption(doctor);
      }
    }
  }, [selectedDoctor, selectedOption, data]);

  const handleChange = (newValue: SingleValue<DoctorType>) => {
    if (newValue) {
      setSelectedOption(newValue);
      setSelectedDoctor(newValue.value);
      localStorage.setItem("selectedDoctor", JSON.stringify(newValue));
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
          Vui lòng chọn{" "}
          {section === "Nhân viên CSKH" ? "nhân viên " : "bác sĩ "}
          thực hiện
        </Label>
      </div>
      <div>
        {data && data?.length > 0 && (
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={data}
          />
        )}
        {data && data?.length == 0 && <div>Không có dữ liệu</div>}
      </div>
    </div>
  );
};

export default Doctors;
