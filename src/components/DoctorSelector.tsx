/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Ensure this runs only on the client

import { getDoctorByBranchNoSection } from "@/app/actions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import Select from "react-select";
import { Label } from "./ui/label";
import { LoaderCircle } from "lucide-react";
import { SELECTED_USER } from "@/lib/constants";
import { useSelection } from "@/providers/SelectionContext";

type DoctorType = {
  value: string;
  label: string;
};

const DoctorSelector = () => {
  const { selectedBranch, selectedUser, setSelectedUser } = useSelection();
  const queryClient = useQueryClient();
  const prevBranchRef = useRef(selectedBranch?.value);

  const {
    error,
    isError,
    isLoading,
    data: doctors,
  } = useQuery({
    queryKey: ["doctors", selectedBranch?.value],
    queryFn: async () => {
      const doctors = await getDoctorByBranchNoSection(selectedBranch?.value);
      return doctors.map((doctor: { value: string; label: string | null }) => ({
        ...doctor,
        label: doctor.label || "",
      }));
    },
    enabled: !!selectedBranch?.value,
    gcTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    if (!selectedBranch?.value) return;
    queryClient.prefetchQuery({
      queryKey: ["doctors", selectedBranch?.value],
      queryFn: async () => {
        const doctors = await getDoctorByBranchNoSection(selectedBranch?.value);
        return doctors.map((doctor) => ({
          ...doctor,
          label: doctor.label || "",
        }));
      },
    });

    // Chỉ refetch khi chi nhánh thực sự thay đổi
    if (selectedBranch?.value !== prevBranchRef.current) {
      queryClient.invalidateQueries({ queryKey: ["doctors", selectedBranch?.value] });
      prevBranchRef.current = selectedBranch?.value;
    }
  }, [queryClient, selectedBranch?.value]);

  // Handlers lưu vào localStorage và state
  const handleChange = (value: DoctorType) => {
    localStorage.setItem(SELECTED_USER, JSON.stringify(value));
    setSelectedUser(value);
  };

  if (isLoading)
    return (
      <div>
        Đang lấy dữ liệu ... <LoaderCircle className="animate-spin w-4 h-4" />
      </div>
    );

  if (isError) return <div>Something went wrong: {error.message}</div>;

  return (
    <div>
      <div className="">
        <Label className="">Nhân viên / Bác sĩ </Label>
      </div>
      {doctors && (
        <Select
          defaultValue={selectedUser}
          value={doctors.find((dep) => dep.value === selectedUser?.value) || null}
          onChange={handleChange}
          options={doctors || []}
        />
      )}
    </div>
  );
};

export default DoctorSelector;
