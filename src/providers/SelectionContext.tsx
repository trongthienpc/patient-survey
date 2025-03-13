/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { SELECTED_BRANCH, SELECTED_DEPARTMENT, SELECTED_USER } from "@/lib/constants";
import { createContext, useContext, useState, useEffect } from "react";

type SelectionContextType = {
  selectedBranch: any;
  setSelectedBranch: (branch: any) => void;
  selectedDepartment: any;
  setSelectedDepartment: (branch: any) => void;
  selectedUser: any;
  setSelectedUser: (branch: any) => void;
};

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const SelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedBranch, setSelectedBranch] = useState<any>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isInitialized, setIsInitialized] = useState(false); // 🔥 Thêm state để theo dõi khi dữ liệu sẵn sàng

  useEffect(() => {
    const savedBranch = localStorage.getItem(SELECTED_BRANCH);
    const savedDepartment = localStorage.getItem(SELECTED_DEPARTMENT);
    const savedUser = localStorage.getItem(SELECTED_USER);

    if (savedBranch) setSelectedBranch(JSON.parse(savedBranch));
    if (savedDepartment) setSelectedDepartment(JSON.parse(savedDepartment));
    if (savedUser) setSelectedUser(JSON.parse(savedUser));

    setIsInitialized(true); // ✅ Đánh dấu dữ liệu đã sẵn sàng
  }, []);

  if (!isInitialized) {
    return null; // 🔥 Chặn render nếu dữ liệu chưa load xong
  }

  return (
    <SelectionContext.Provider
      value={{
        selectedBranch,
        setSelectedBranch,
        selectedDepartment,
        setSelectedDepartment,
        selectedUser,
        setSelectedUser,
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
