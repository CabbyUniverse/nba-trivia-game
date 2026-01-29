import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { QuestionCard } from '@/components/game/QuestionCard';
import { MultipleChoiceButtons } from '@/components/game/MultipleChoiceButtons';
import { ScoreDisplay } from '@/components/game/ScoreDisplay';
import { SplashScreen } from '@/components/game/SplashScreen';
import { GameOverScreen } from '@/components/game/GameOverScreen';
import { QuestionLoader } from '@/utils/questionLoader';
import { DifficultyEngine } from '@/utils/difficultyEngine';
import { Question, GameState } from '@/types/game';

export default function HomeScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);
  
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 0,
    correctStreak: 0,
    incorrectStreak: 0,
    answeredQuestions: [],
    difficulty: 'easy',
  });

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    setLoading(true);
    const loadedQuestions = await QuestionLoader.loadQuestions();
    
    // Separate by difficulty
    const easy = loadedQuestions.filter(q => q.difficulty === 'easy');
    const medium = loadedQuestions.filter(q => q.difficulty === 'medium');
    const hard = loadedQuestions.filter(q => q.difficulty === 'hard');
    
    // Shuffle each group
    const shuffledEasy = QuestionLoader.shuffleQuestions(easy);
    const shuffledMedium = QuestionLoader.shuffleQuestions(medium);
    const shuffledHard = QuestionLoader.shuffleQuestions(hard);
    
    // Pick 3 easy, 3 medium, 4 hard
    const selectedQuestions = [
      ...shuffledEasy.slice(0, 3),
      ...shuffledMedium.slice(0, 3),
      ...shuffledHard.slice(0, 4)
    ];
    
    setQuestions(selectedQuestions);
    setGameState(prev => ({ ...prev, totalQuestions: selectedQuestions.length }));
    setLoading(false);
  };

  const checkAnswer = (selectedAnswer: string) => {
    if (!selectedAnswer.trim()) return;

    const currentQuestion = questions[gameState.currentQuestionIndex];
    const isCorrect = selectedAnswer.trim() === currentQuestion.a;

    setUserAnswer(selectedAnswer);

    if (isCorrect) {
      // Award points based on difficulty
      let points = 5;
      if (currentQuestion.difficulty === 'medium') points = 10;
      if (currentQuestion.difficulty === 'hard') points = 15;
      
      const newScore = gameState.score + points;
      const newCorrectStreak = gameState.correctStreak + 1;
      const newDifficulty = DifficultyEngine.adjustDifficulty({
        ...gameState,
        correctStreak: newCorrectStreak,
        incorrectStreak: 0,
      });

      setGameState(prev => ({
        ...prev,
        score: newScore,
        correctStreak: newCorrectStreak,
        incorrectStreak: 0,
        difficulty: newDifficulty,
      }));

      setFeedback({
        correct: true,
        message: `✅ Correct! +${points} points!`,
      });
    } else {
      const newIncorrectStreak = gameState.incorrectStreak + 1;
      const newDifficulty = DifficultyEngine.adjustDifficulty({
        ...gameState,
        correctStreak: 0,
        incorrectStreak: newIncorrectStreak,
      });

      setGameState(prev => ({
        ...prev,
        correctStreak: 0,
        incorrectStreak: newIncorrectStreak,
        difficulty: newDifficulty,
      }));

      setFeedback({
        correct: false,
        message: `❌ Not quite. The answer is: ${currentQuestion.a}`,
      });
    }

    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const nextQuestion = () => {
    const nextIndex = gameState.currentQuestionIndex + 1;
    
    if (nextIndex >= questions.length) {
      showGameOver();
      return;
    }

    setGameState(prev => ({
      ...prev,
      currentQuestionIndex: nextIndex,
    }));
    setUserAnswer('');
    setFeedback(null);
  };

  const showGameOver = () => {
    setGameOver(true);
  };

  const resetGame = () => {
    setGameOver(false);
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: questions.length,
      correctStreak: 0,
      incorrectStreak: 0,
      answeredQuestions: [],
      difficulty: 'easy',
    });
    setUserAnswer('');
    setFeedback(null);
    loadQuestions();
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (gameOver) {
    return (
      <GameOverScreen
        score={gameState.score}
        totalQuestions={gameState.totalQuestions}
        onPlayAgain={resetGame}
      />
    );
  }

  if (loading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ThemedText type="title">Loading NBA Trivia...</ThemedText>
      </ThemedView>
    );
  }

  const currentQuestion = questions[gameState.currentQuestionIndex];

  const getBackgroundImage = () => {
    switch (currentQuestion?.background) {
      case 'baseball':
        return require('@/assets/images/Baseballfield.jpg');
      case 'indoor':
        return require('@/assets/images/IndoorCourt.jpg');
      case 'outdoor':
        return require('@/assets/images/OutdoorCourt.jpg');
      default:
        return require('@/assets/images/IndoorCourt.jpg');
    }
  };

  return (
    <ImageBackground
      source={getBackgroundImage()}
      style={styles.backgroundImage}
      resizeMode="contain"
      imageStyle={styles.backgroundImageStyle}
    >
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>
            🏀 NBA Trivia Game
          </ThemedText>

          <ScoreDisplay
            score={gameState.score}
            totalQuestions={gameState.totalQuestions}
            difficulty={gameState.difficulty}
            correctStreak={gameState.correctStreak}
          />

          <QuestionCard
            question={currentQuestion.q}
            questionNumber={gameState.currentQuestionIndex + 1}
            totalQuestions={gameState.totalQuestions}
            difficulty={currentQuestion.difficulty}
          />

          {feedback && (
            <ThemedView style={[
              styles.feedback,
              { backgroundColor: feedback.correct ? '#4CAF50' : '#F44336' }
            ]}>
              <ThemedText style={styles.feedbackText}>{feedback.message}</ThemedText>
            </ThemedView>
          )}

          <MultipleChoiceButtons
            options={currentQuestion.options || []}
            onSelect={checkAnswer}
            disabled={!!feedback}
            selectedAnswer={userAnswer}
          />

          <ThemedView style={styles.infoBox}>
            <ThemedText style={styles.infoText}>
              💡 Tip: Get 3 correct in a row to increase difficulty!
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.3,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: 'transparent',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  feedback: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 12,
  },
  feedbackText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  infoBox: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    opacity: 0.7,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
