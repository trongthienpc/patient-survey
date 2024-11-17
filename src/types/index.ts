export interface Question {
  key: number;
  value: string;
  iconPath: unknown;
}

export interface SurveySection {
  id: string;
  name: string;
}

export interface SurveyAnswer {
  selectedOptions?: string[];
  feedback?: string;
  rating?: string;
  room?: string[];
  doctor?: string;
}

export interface Answers {
  [key: string]: SurveyAnswer;
}
