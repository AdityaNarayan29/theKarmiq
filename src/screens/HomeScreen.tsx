import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Logo, ActionCard } from '@components/common';
import { DailyInsightCard } from '@components/home';
import { colors, spacing, fontSizes } from '@constants/theme';

interface HomeScreenProps {
  userName?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ userName = 'Arjuna' }) => {
  const handleResumeLesson = () => {
    // Navigate to lesson
  };

  const handleContinueBlog = () => {
    // Navigate to blog
  };

  return (
    <View style={styles.container} testID="home-screen">
      {/* Background gradient effect */}
      <View style={styles.backgroundGradient} />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Logo size={80} showStar />
          </View>

          {/* Brand Title */}
          <Text style={styles.brandTitle}>The Karmiq</Text>

          {/* Greeting */}
          <Text style={styles.greeting}>Hi {userName},</Text>
          <Text style={styles.subtitle}>Your cosmic journey begins here.</Text>

          {/* Daily Insight Card */}
          <View style={styles.cardSection}>
            <DailyInsightCard
              dailyMessage="Today, presence is greater than impulse."
              weeklyMessage="This week, focus on building meaningful connections."
              bestTimeStart="9:30 AM"
              bestTimeEnd="11:20 AM"
            />
          </View>

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <ActionCard
              title="Resume"
              subtitle="Lesson"
              icon="bookmark"
              onPress={handleResumeLesson}
              testID="resume-lesson-button"
            />
            <View style={styles.actionSpacer} />
            <ActionCard
              title="Continue"
              subtitle="Blog"
              icon="document"
              onPress={handleContinueBlog}
              testID="continue-blog-button"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: colors.background,
    // In production, you'd use a gradient or background image here
  },
  safeArea: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: 100, // Space for tab bar
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  brandTitle: {
    fontSize: fontSizes.xxxl,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    fontFamily: 'serif',
    letterSpacing: 1,
  },
  greeting: {
    fontSize: fontSizes.xxl,
    fontWeight: '600',
    color: colors.textGold,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
  subtitle: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
  },
  cardSection: {
    marginTop: spacing.md,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  actionSpacer: {
    width: spacing.md,
  },
});
