import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface MultipleChoiceButtonsProps {
  options: string[];
  onSelect: (answer: string) => void;
  disabled?: boolean;
  selectedAnswer?: string;
}

export function MultipleChoiceButtons({ options, onSelect, disabled, selectedAnswer }: MultipleChoiceButtonsProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            { 
              backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
              borderColor: selectedAnswer === option ? '#007AFF' : 'transparent',
              borderWidth: selectedAnswer === option ? 2 : 0,
            },
            disabled && styles.buttonDisabled
          ]}
          onPress={() => onSelect(option)}
          disabled={disabled}
        >
          <ThemedText style={styles.buttonText}>{option}</ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
