import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Linking } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

interface GameOverScreenProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
}

export function GameOverScreen({ score, totalQuestions, onPlayAgain }: GameOverScreenProps) {
  const percentage = Math.round((score / 105) * 100);

  const handleDonatePress = () => {
    Linking.openURL('https://buymeacoffee.com/soullivestream');
  };

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/Tylers-MBA-Trivia-Donate.gif')}
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
      
      <ThemedText style={styles.thankYouText}>
        Thanks for playing! Play as much as you like and increase your score.
      </ThemedText>
      
      <TouchableOpacity style={styles.donateButton} onPress={handleDonatePress}>
        <ThemedText style={styles.donateText}>
          To donate and support, scan QR code or{' '}
          <ThemedText style={styles.linkText}>click here</ThemedText>
        </ThemedText>
      </TouchableOpacity>
      
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
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  donateButton: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  donateText: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.9,
  },
  linkText: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    fontWeight: '600',
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
