import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { borderRadius, spacing } from '@constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'glass';
  showGlow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  variant = 'default',
  showGlow = true,
}) => {
  return (
    <View style={[styles.cardWrapper, style]}>
      {/* Subtle orange glow from top */}
      {showGlow && (
        <LinearGradient
          colors={['rgba(240, 198, 86, 0.18)', 'rgba(240, 198, 86, 0.08)', 'rgba(240, 198, 86, 0)']}
          locations={[0, 0.4, 1]}
          style={styles.glowOverlay}
        />
      )}
      <View style={[styles.card, variant === 'glass' ? styles.glass : styles.default]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    position: 'relative',
    borderRadius: borderRadius.xxl,
    overflow: 'hidden',
  },
  glowOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    borderTopLeftRadius: borderRadius.xxl,
    borderTopRightRadius: borderRadius.xxl,
    zIndex: 1,
    pointerEvents: 'none',
  },
  card: {
    borderRadius: borderRadius.xxl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(240, 198, 86, 0.15)',
  },
  default: {
    backgroundColor: 'rgba(20, 15, 35, 0.85)',
  },
  glass: {
    backgroundColor: 'rgba(20, 15, 35, 0.6)',
  },
});
