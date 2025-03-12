"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { UserRoundCog } from "lucide-react";
import BranchSelector from "./BranchSelector";
import DepartmentSelector from "./DepartmentSelector";
import DoctorSelector from "./DoctorSelector";

export function SelectedSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <UserRoundCog className="text-white cursor-pointer w-8 h-8" />
      </SheetTrigger>
      <SheetContent className="w-96">
        <SheetHeader>
          <SheetTitle>Cấu hình thông tin khảo sát</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <BranchSelector />
          </div>
          <div className="grid items-center gap-4">
            <DepartmentSelector />
          </div>
          <div className="grid items-center gap-4">
            <DoctorSelector />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
