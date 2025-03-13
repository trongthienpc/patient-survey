import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function CustomDatePicker({
  value,
  onChange,
  placeholder,
}: {
  value: string | null;
  onChange: (date: string | null) => void;
  placeholder?: string;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);

  function handleDateChange(date: Date | null) {
    if (date) {
      const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()); // Giữ ngày đúng theo local time
      const utcDate = new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate())); // Convert về UTC
      setSelectedDate(utcDate);
      onChange(utcDate.toISOString().split("T")[0]); // Gửi dạng YYYY-MM-DD (UTC)
    }
  }

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
      placeholderText={placeholder}
      className="border rounded px-3 py-2 w-40 text-center"
    />
  );
}
