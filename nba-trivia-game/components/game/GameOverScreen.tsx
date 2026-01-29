import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

interface GameOverScreenProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
}

export function GameOverScreen({ score, totalQuestions, onPlayAgain }: GameOverScreenProps) {
  const percentage = Math.round((score / 105) * 100);

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/spash.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      <ThemedText type="title" style={styles.title}>
        🎉 Congratulations! 🎉
      </ThemedText>
      
      <ThemedText style={styles.scoreText}>
        You scored {score} points!
      </ThemedText>
      
      <ThemedText style={styles.percentageText}>
        {percentage}% Correct
      </ThemedText>
      
      <TouchableOpacity style={styles.button} onPress={onPlayAgain}>
        <ThemedText style={styles.buttonText}>Play Again</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  percentageText: {
    fontSize: 20,
    opacity: 0.8,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
