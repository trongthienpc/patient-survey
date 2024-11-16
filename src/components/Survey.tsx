"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smile, Frown, Meh, ThumbsUp, ThumbsDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SurveySectionProps {
  title: string;
  onComplete: (data: SurveyData) => void;
}

interface SurveyData {
  satisfaction: number | null;
  reasons: string[];
}

interface SatisfactionLevel {
  value: number;
  label: string;
  icon: React.ReactNode;
}

// Satisfaction levels with corresponding emoticons
const satisfactionLevels: SatisfactionLevel[] = [
  {
    value: 1,
    label: "Very Dissatisfied",
    icon: <ThumbsDown className="text-red-500" size={32} />,
  },
  {
    value: 2,
    label: "Dissatisfied",
    icon: <Frown className="text-orange-500" size={32} />,
  },
  {
    value: 3,
    label: "Normal",
    icon: <Meh className="text-yellow-500" size={32} />,
  },
  {
    value: 4,
    label: "Satisfied",
    icon: <Smile className="text-green-500" size={32} />,
  },
  {
    value: 5,
    label: "Very Satisfied",
    icon: <ThumbsUp className="text-blue-500" size={32} />,
  },
];

const SurveySection: React.FC<SurveySectionProps> = ({ title, onComplete }) => {
  const [step, setStep] = useState(1);
  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [reasons, setReasons] = useState<string[]>([]);

  const getReasonOptions = (isSatisfied: boolean) => {
    if (title === "Doctor Examination") {
      return isSatisfied
        ? [
            "Doctor is friendly and approachable",
            "Doctor provides thorough consultation",
            "Doctor understands patient psychology well",
            "Doctor is highly skilled and reliable",
            "Doctor has extensive experience",
          ]
        : [
            "Doctor seems indifferent",
            "Doctor is not friendly",
            "Insufficient consultation",
            "Lack of trust building",
            "Superficial examination",
          ];
    }
    // Add similar options for other sections...
    return [];
  };

  const handleSatisfactionSelect = (value: number) => {
    setSatisfaction(value);
    setStep(2);
  };

  const handleReasonSelect = (reason: string) => {
    setReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const handleSubmit = () => {
    onComplete({ satisfaction, reasons });
    setStep(1);
    setSatisfaction(null);
    setReasons([]);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto my-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium text-center mb-6">
                How satisfied were you with the {title.toLowerCase()}?
              </h3>
              <div className="flex justify-between gap-2">
                {satisfactionLevels.map((level) => (
                  <motion.button
                    key={level.value}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSatisfactionSelect(level.value)}
                    className={`flex flex-col items-center p-4 rounded-lg transition-colors
                      ${
                        satisfaction === level.value
                          ? "bg-blue-100"
                          : "hover:bg-gray-100"
                      }`}
                  >
                    {level.icon}
                    <span className="text-sm mt-2">{level.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium text-center mb-6">
                {satisfaction && satisfaction > 3
                  ? "What did you like most?"
                  : "What could be improved?"}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {getReasonOptions(satisfaction ? satisfaction > 3 : false).map(
                  (reason) => (
                    <motion.button
                      key={reason}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleReasonSelect(reason)}
                      className={`p-4 rounded-lg text-left transition-colors
                      ${
                        reasons.includes(reason)
                          ? "bg-blue-100"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      {reason}
                    </motion.button>
                  )
                )}
              </div>
              <div className="flex justify-end mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Submit
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

const SurveyApp = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["Doctor Examination", "Doctor Ultrasound", "Customer Care"];

  const handleSectionComplete = async (data: SurveyData) => {
    // Here you would typically save the data to your database
    console.log(`Section ${sections[currentSection]} completed:`, data);
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    } else {
      // Survey completed
      console.log("Survey completed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Patient Satisfaction Survey
        </h1>
        <div className="flex justify-between mb-8">
          {sections.map((section, index) => (
            <div
              key={section}
              className={`flex items-center ${index > 0 ? "ml-4" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < currentSection
                    ? "bg-green-500 text-white"
                    : index === currentSection
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </div>
              <span className="ml-2 text-sm">{section}</span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <SurveySection
              title={sections[currentSection]}
              onComplete={handleSectionComplete}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SurveyApp;
