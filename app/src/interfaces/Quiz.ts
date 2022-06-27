export interface Quiz {
  questions: Question[];
  correctAnswersIndex: number[];
}

export interface Question {
  question: string;
  answers: string[];
  selectedAnswerIndex?: number;
}
