import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Logo } from '@components/common';
import { colors, spacing, fontSizes } from '@constants/theme';

export const KarmiqScreen: React.FC = () => {
  return (
    <View style={styles.container} testID="karmiq-screen">
      <SafeAreaView style={styles.safeArea}>
        <Logo size={100} showStar />
        <Text style={styles.title}>The Karmiq</Text>
        <Text style={styles.subtitle}>Discover your cosmic insights</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.xxl,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
