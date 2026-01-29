import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function StatsScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          📊 Game Stats
        </ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">About This Game</ThemedText>
          <ThemedText style={styles.text}>
            This NBA Trivia Game features adaptive difficulty that adjusts based on your performance.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">How It Works</ThemedText>
          <ThemedText style={styles.text}>
            • Get 3 correct answers in a row → Difficulty increases{'\n'}
            • Miss 1 medium/hard question → Difficulty decreases{'\n'}
            • Track your streak for bonus motivation!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Points System</ThemedText>
          <ThemedText style={styles.text}>
            🟢 Easy Questions = 5 points{'\n'}
            🟠 Medium Questions = 10 points{'\n'}
            🔴 Hard Questions = 15 points{'\n'}
            {'\n'}
            Maximum Score: 105 points{'\n'}
            (3 Easy + 3 Medium + 4 Hard)
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Difficulty Levels</ThemedText>
          <ThemedText style={styles.text}>
            🟢 Easy - Basic NBA knowledge{'\n'}
            🟠 Medium - Intermediate facts{'\n'}
            🔴 Hard - Expert-level trivia
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Tech Stack</ThemedText>
          <ThemedText style={styles.text}>
            Built with React Native + Expo{'\n'}
            TypeScript for type safety{'\n'}
            AI-assisted development with Amazon Q{'\n'}
            Adaptive difficulty algorithm{'\n'}
            Cross-platform (iOS, Android, Web)
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  text: {
    marginTop: 12,
    lineHeight: 24,
  },
});
