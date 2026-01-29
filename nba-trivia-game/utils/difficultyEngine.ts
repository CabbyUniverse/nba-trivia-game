import { GameState } from '@/types/game';

export class DifficultyEngine {
  static adjustDifficulty(gameState: GameState): 'easy' | 'medium' | 'hard' {
    const { correctStreak, incorrectStreak } = gameState;

    // If player gets 3 correct in a row, increase difficulty
    if (correctStreak >= 3) {
      if (gameState.difficulty === 'easy') return 'medium';
      if (gameState.difficulty === 'medium') return 'hard';
    }

    // If player gets 1 incorrect on medium or hard, drop back one level
    if (incorrectStreak >= 1) {
      if (gameState.difficulty === 'hard') return 'medium';
      if (gameState.difficulty === 'medium') return 'easy';
    }

    return gameState.difficulty;
  }

  static getDifficultyColor(difficulty: 'easy' | 'medium' | 'hard'): string {
    switch (difficulty) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
    }
  }

  static getDifficultyLabel(difficulty: 'easy' | 'medium' | 'hard'): string {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  }
}
