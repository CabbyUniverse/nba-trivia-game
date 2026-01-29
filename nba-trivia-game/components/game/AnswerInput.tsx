import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface AnswerInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export function AnswerInput({ value, onChangeText, onSubmit, disabled }: AnswerInputProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { 
            backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
            color: isDark ? '#fff' : '#000',
          }
        ]}
        placeholder="Type your answer..."
        placeholderTextColor={isDark ? '#666' : '#999'}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        editable={!disabled}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <TouchableOpacity 
        style={[styles.button, disabled && styles.buttonDisabled]} 
        onPress={onSubmit}
        disabled={disabled || !value.trim()}
      >
        <ThemedText style={styles.buttonText}>Submit</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  input: {
    padding: 16,
    borderRadius: 8,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
