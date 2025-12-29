import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Easing,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Logo, ActionCard } from '@components/common';
import { DailyInsightCard } from '@components/home';
import { colors, spacing, fontSizes } from '@constants/theme';

const backgroundImage = require('@assets/images/backgrounds/cosmic-tree.png');

interface HomeScreenProps {
  userName?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ userName = 'Arjuna' }) => {
  // Animation values
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(20)).current;
  const greetingOpacity = useRef(new Animated.Value(0)).current;
  const cardOpacity = useRef(new Animated.Value(0)).current;
  const cardTranslateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // Staggered entrance animations
    Animated.sequence([
      Animated.delay(200),
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Title animation
    Animated.sequence([
      Animated.delay(500),
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslateY, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Greeting animation
    Animated.sequence([
      Animated.delay(800),
      Animated.timing(greetingOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // Cards animation
    Animated.sequence([
      Animated.delay(1000),
      Animated.parallel([
        Animated.timing(cardOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(cardTranslateY, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResumeLesson = () => {
    // Navigate to lesson
  };

  const handleContinueBlog = () => {
    // Navigate to blog
  };

  return (
    <View style={styles.container} testID="home-screen">
      {/* Background image */}
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        {/* Overlay for better text readability */}
        <LinearGradient
          colors={[
            'rgba(10, 8, 18, 0.55)',
            'rgba(10, 8, 18, 0.45)',
            'rgba(10, 8, 18, 0.6)',
            'rgba(10, 8, 18, 0.92)',
          ]}
          locations={[0, 0.3, 0.6, 1]}
          style={styles.overlay}
        />
      </ImageBackground>

      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Logo with animation */}
          <Animated.View
            style={[
              styles.logoContainer,
              { opacity: logoOpacity, transform: [{ scale: logoScale }] },
            ]}
          >
            <Logo size={100} showStar />
          </Animated.View>

          {/* Brand Title with animation */}
          <Animated.View
            style={[
              styles.titleContainer,
              {
                opacity: titleOpacity,
                transform: [{ translateY: titleTranslateY }],
              },
            ]}
          >
            <Text style={styles.brandTitle}>The Karmiq</Text>
          </Animated.View>

          {/* Greeting with animation */}
          <Animated.View style={[styles.greetingContainer, { opacity: greetingOpacity }]}>
            <Text style={styles.greeting}>Hi {userName},</Text>
            <View style={styles.greetingUnderline} />
            <Text style={styles.subtitle}>Your cosmic journey begins here.</Text>
          </Animated.View>

          {/* Daily Insight Card with animation */}
          <Animated.View
            style={[
              styles.cardSection,
              { opacity: cardOpacity, transform: [{ translateY: cardTranslateY }] },
            ]}
          >
            <DailyInsightCard
              dailyMessage="Today, presence is greater than impulse."
              weeklyMessage="This week, focus on building meaningful connections."
              bestTimeStart="9:30 AM"
              bestTimeEnd="11:20 AM"
            />
          </Animated.View>

          {/* Action Buttons with animation */}
          <Animated.View
            style={[
              styles.actionRow,
              { opacity: cardOpacity, transform: [{ translateY: cardTranslateY }] },
            ]}
          >
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
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0812',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 120,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  brandTitle: {
    fontSize: fontSizes.xxxl,
    fontWeight: '300',
    color: colors.text,
    textAlign: 'center',
    fontFamily: 'serif',
    letterSpacing: 3,
  },
  greetingContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  greeting: {
    fontSize: fontSizes.xxl,
    fontWeight: '600',
    color: colors.textGold,
    textAlign: 'center',
  },
  greetingUnderline: {
    width: 120,
    height: 2,
    backgroundColor: colors.textGold,
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
    borderRadius: 1,
  },
  subtitle: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  cardSection: {
    marginTop: spacing.sm,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  actionSpacer: {
    width: spacing.md,
  },
});
