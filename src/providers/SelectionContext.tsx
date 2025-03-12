/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  SELECTED_BRANCH,
  SELECTED_CONSULTATION_DOCTOR,
  SELECTED_CONSULTATION_ROOM,
  SELECTED_CUSTOMER_CARE,
  SELECTED_DEPARTMENT,
  SELECTED_ULTRASOUND_DOCTOR,
  SELECTED_ULTRASOUND_ROOM,
  SELECTED_USER,
} from "@/lib/constants";
import { createContext, useContext, useState, useEffect } from "react";

type SelectionContextType = {
  selectedBranch: any;
  setSelectedBranch: (branch: any) => void;
  selectedDepartment: any;
  setSelectedDepartment: (branch: any) => void;
  selectedUser: any;
  setSelectedUser: (branch: any) => void;
  selectedConsultationRoom: any;
  setSelectedConsultationRoom: (room: any) => void;
  selectedConsultationDoctor: any;
  setSelectedConsultationDoctor: (doctor: any) => void;
  selectedUltrasoundRoom: any;
  setSelectedUltrasoundRoom: (room: any) => void;
  selectedUltrasoundDoctor: any;
  setSelectedUltrasoundDoctor: (doctor: any) => void;
  selectedCustomerCare: any;
  setSelectedCustomerCare: (doctor: any) => void;
};

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const SelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedBranch, setSelectedBranch] = useState<any>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [selectedConsultationRoom, setSelectedConsultationRoom] = useState<any>(null);
  const [selectedConsultationDoctor, setSelectedConsultationDoctor] = useState<any>(null);
  const [selectedUltrasoundRoom, setSelectedUltrasoundRoom] = useState<any>(null);
  const [selectedUltrasoundDoctor, setSelectedUltrasoundDoctor] = useState<any>(null);
  const [selectedCustomerCare, setSelectedCustomerCare] = useState<any>(null);

  useEffect(() => {
    const savedBranch = localStorage.getItem(SELECTED_BRANCH);
    const savedDepartment = localStorage.getItem(SELECTED_DEPARTMENT);
    const savedUser = localStorage.getItem(SELECTED_USER);
    const saveConsultationRoom = localStorage.getItem(SELECTED_CONSULTATION_ROOM);
    const saveConsultationDoctor = localStorage.getItem(SELECTED_CONSULTATION_DOCTOR);
    const saveUltrasoundRoom = localStorage.getItem(SELECTED_ULTRASOUND_ROOM);
    const saveUltrasoundDoctor = localStorage.getItem(SELECTED_ULTRASOUND_DOCTOR);
    const saveCustomerCare = localStorage.getItem(SELECTED_CUSTOMER_CARE);
    if (saveCustomerCare) {
      setSelectedCustomerCare(JSON.parse(saveCustomerCare));
    }
    if (saveUltrasoundDoctor) {
      setSelectedUltrasoundDoctor(JSON.parse(saveUltrasoundDoctor));
    }
    if (saveUltrasoundRoom) {
      setSelectedUltrasoundRoom(JSON.parse(saveUltrasoundRoom));
    }
    if (savedBranch) {
      setSelectedBranch(JSON.parse(savedBranch));
    }
    if (savedDepartment) {
      setSelectedDepartment(JSON.parse(savedDepartment));
    }
    if (savedUser) {
      setSelectedUser(JSON.parse(savedUser));
    }
    if (saveConsultationDoctor) {
      setSelectedConsultationDoctor(JSON.parse(saveConsultationDoctor));
    }
    if (saveConsultationRoom) {
      setSelectedConsultationRoom(JSON.parse(saveConsultationRoom));
    }
  }, []);

  return (
    <SelectionContext.Provider
      value={{
        selectedBranch,
        setSelectedBranch,
        selectedUser,
        setSelectedUser,
        selectedDepartment,
        setSelectedDepartment,
        selectedConsultationRoom,
        setSelectedConsultationRoom,
        selectedConsultationDoctor,
        setSelectedConsultationDoctor,
        selectedUltrasoundRoom,
        setSelectedUltrasoundRoom,
        selectedUltrasoundDoctor,
        setSelectedUltrasoundDoctor,
        selectedCustomerCare,
        setSelectedCustomerCare,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};
