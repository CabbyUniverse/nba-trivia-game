import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { DifficultyEngine } from '@/utils/difficultyEngine';

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  difficulty: 'easy' | 'medium' | 'hard';
  correctStreak: number;
}

export function ScoreDisplay({ score, totalQuestions, difficulty, correctStreak }: ScoreDisplayProps) {
  const difficultyColor = DifficultyEngine.getDifficultyColor(difficulty);
  const difficultyLabel = DifficultyEngine.getDifficultyLabel(difficulty);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.scoreContainer}>
        <ThemedText type="title" style={styles.score}>{score}</ThemedText>
        <ThemedText style={styles.label}>Score</ThemedText>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.difficultyContainer}>
        <View style={[styles.difficultyBadge, { backgroundColor: difficultyColor }]}>
          <ThemedText style={styles.difficultyText}>{difficultyLabel}</ThemedText>
        </View>
        {correctStreak > 0 && (
          <ThemedText style={styles.streak}>🔥 {correctStreak} streak</ThemedText>
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    opacity: 0.7,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#ccc',
  },
  difficultyContainer: {
    alignItems: 'center',
    gap: 8,
  },
  difficultyBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  difficultyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  streak: {
    fontSize: 12,
  },
});
