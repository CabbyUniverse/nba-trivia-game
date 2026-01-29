import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

interface QuestionCardProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export function QuestionCard({ question, questionNumber, totalQuestions, difficulty }: QuestionCardProps) {
  const getDifficultyDisplay = () => {
    switch (difficulty) {
      case 'easy':
        return { emoji: '🟢', label: 'Easy - Basic NBA knowledge' };
      case 'medium':
        return { emoji: '🟠', label: 'Medium - Intermediate facts' };
      case 'hard':
        return { emoji: '🔴', label: 'Hard - Expert-level trivia' };
      default:
        return { emoji: '🟢', label: 'Easy' };
    }
  };

  const difficultyInfo = getDifficultyDisplay();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.questionNumber}>
          Question {questionNumber} of {totalQuestions}
        </ThemedText>
        <ThemedText style={styles.difficulty}>
          {difficultyInfo.emoji} {difficultyInfo.label}
        </ThemedText>
      </View>
      <ThemedText type="title" style={styles.question}>
        {question}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
  },
  header: {
    marginBottom: 10,
  },
  questionNumber: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 5,
  },
  difficulty: {
    fontSize: 13,
    fontWeight: '600',
  },
  question: {
    fontSize: 24,
    lineHeight: 32,
  },
});
