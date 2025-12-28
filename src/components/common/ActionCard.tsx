import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Bookmark, FileText } from 'lucide-react-native';
import { colors, borderRadius, spacing, fontSizes, shadows } from '@constants/theme';

interface ActionCardProps {
  title: string;
  subtitle?: string;
  icon: 'bookmark' | 'document';
  onPress: () => void;
  testID?: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  subtitle,
  icon,
  onPress,
  testID,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'bookmark':
        return <Bookmark color={colors.primary} size={24} />;
      case 'document':
        return <FileText color={colors.primary} size={24} />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
      testID={testID}
    >
      <View style={styles.iconContainer}>{renderIcon()}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.xl,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.card,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    backgroundColor: colors.backgroundGlass,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: fontSizes.md,
    fontWeight: '600',
    color: colors.text,
  },
  subtitle: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
