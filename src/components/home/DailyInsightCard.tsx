import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Card } from '@components/common/Card';
import { SegmentedControl } from '@components/common/SegmentedControl';
import { colors, spacing, fontSizes } from '@constants/theme';

interface DailyInsightCardProps {
  dailyMessage: string;
  weeklyMessage?: string;
  bestTimeStart: string;
  bestTimeEnd: string;
}

export const DailyInsightCard: React.FC<DailyInsightCardProps> = ({
  dailyMessage,
  weeklyMessage,
  bestTimeStart,
  bestTimeEnd,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [displayedMessage, setDisplayedMessage] = useState(dailyMessage);

  // Animation values for content transition
  const contentOpacity = useRef(new Animated.Value(1)).current;
  const contentTranslateY = useRef(new Animated.Value(0)).current;

  const handleTabChange = (index: number) => {
    if (index === selectedTab) return;

    // Animate out
    Animated.parallel([
      Animated.timing(contentOpacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(contentTranslateY, {
        toValue: -10,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Update content
      setSelectedTab(index);
      setDisplayedMessage(index === 0 ? dailyMessage : weeklyMessage || dailyMessage);

      // Reset position and animate in
      contentTranslateY.setValue(10);
      Animated.parallel([
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 200,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(contentTranslateY, {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  return (
    <Card style={styles.container}>
      <SegmentedControl
        options={['Your Day', 'Your Week']}
        selectedIndex={selectedTab}
        onSelect={handleTabChange}
      />

      <Animated.View
        style={[
          styles.contentContainer,
          {
            opacity: contentOpacity,
            transform: [{ translateY: contentTranslateY }],
          },
        ]}
      >
        <Text style={styles.message}>{displayedMessage}</Text>

        <View style={styles.divider} />

        <Text style={styles.bestTime}>
          Best time: {bestTimeStart} – {bestTimeEnd}
        </Text>
      </Animated.View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  contentContainer: {
    marginTop: spacing.lg,
  },
  message: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 32,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  bestTime: {
    fontSize: fontSizes.md,
    color: colors.textGold,
    fontWeight: '500',
  },
});
