export default interface User {
  email: string;
  password: string;
  score: Score;
}

export interface Score {
  totalPoints: number;
  maxPoints: number;
}
