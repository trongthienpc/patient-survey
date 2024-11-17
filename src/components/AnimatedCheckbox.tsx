import { motion } from "framer-motion";

interface AnimatedCheckboxProps {
  section: {
    id: string;
    name: string;
  };
  selectedSections: string[];
  handleSectionToggle: (sectionId: string) => void;
}

export default function AnimatedCheckbox({
  section,
  selectedSections,
  handleSectionToggle,
}: AnimatedCheckboxProps) {
  const isChecked = selectedSections.includes(section.id);
  console.log("🚀 ~ isChecked:", isChecked);

  return (
    <div
      className="h-full flex items-center space-x-4 select-none cursor-pointer"
      key={section.id}
    >
      {/* Checkbox Icon (motion div để làm hoạt hình) */}
      <motion.div
        className={`relative w-10 h-10 flex items-center justify-center border-2 rounded-md transition-all duration-300 ${
          isChecked ? "border-blue-500" : "border-gray-400"
        }`}
        animate={{
          borderColor: isChecked ? "rgb(59 130 246)" : "rgb(156 163 175)",
        }}
        transition={{ duration: 0.2 }}
        onClick={() => handleSectionToggle(section.id)} // Thay đổi trạng thái khi click vào checkbox
      >
        {/* Mỗi khi checked, sẽ hiện dấu tích */}
        {isChecked && (
          <motion.div
            className="text-primary text-4xl font-bold"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            ✓
          </motion.div>
        )}
      </motion.div>

      {/* Label */}
      <motion.label
        htmlFor={section.id}
        className="cursor-pointer text-3xl font-medium text-gray-800 flex items-center"
        initial={{ scale: 1 }}
        animate={{
          scale: isChecked ? 1.1 : 1,
          color: isChecked ? "#6969ff" : "#333",
        }}
        transition={{ duration: 0.2 }}
        onClick={(e) => {
          e.stopPropagation(); // Ngừng sự kiện lan truyền để không trigger thêm sự kiện từ div ngoài
          handleSectionToggle(section.id); // Toggle khi click vào label
        }}
      >
        {section.name}
      </motion.label>
    </div>
  );
}
