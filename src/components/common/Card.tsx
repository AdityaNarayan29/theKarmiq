import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, borderRadius, spacing, shadows } from '@constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'glass';
}

export const Card: React.FC<CardProps> = ({ children, style, variant = 'default' }) => {
  return (
    <View style={[styles.card, variant === 'glass' ? styles.glass : styles.default, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.card,
  },
  default: {
    backgroundColor: colors.backgroundSecondary,
  },
  glass: {
    backgroundColor: colors.backgroundGlass,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
