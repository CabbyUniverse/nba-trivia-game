export interface Question {
  q: string;
  a: string;
  options?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  background?: 'baseball' | 'indoor' | 'outdoor';
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
  correctStreak: number;
  incorrectStreak: number;
  answeredQuestions: number[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuestionData {
  questions: Question[];
}
