import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

  const message = selectedTab === 0 ? dailyMessage : weeklyMessage || dailyMessage;

  return (
    <Card style={styles.container}>
      <SegmentedControl
        options={['Your Day', 'Your Week']}
        selectedIndex={selectedTab}
        onSelect={setSelectedTab}
      />

      <Text style={styles.message}>{message}</Text>

      <View style={styles.divider} />

      <Text style={styles.bestTime}>
        Best time: {bestTimeStart} – {bestTimeEnd}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  message: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.lg,
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
