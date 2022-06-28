export interface Quiz {
  questions: Question[];
  selectedAnswerIndex?: number;
}

export interface Question {
  question: string;
  answers: string[];
  correct: number;
}
