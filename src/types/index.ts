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
  selectedOptions?: number[];
  feedback?: string;
  rating?: string;
}

export interface Answers {
  [key: string]: SurveyAnswer;
}
