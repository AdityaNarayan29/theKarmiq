import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Bookmark, FileText } from 'lucide-react-native';
import { colors, borderRadius, spacing, fontSizes } from '@constants/theme';

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
    const iconColor = colors.primary;
    const iconSize = 22;
    switch (icon) {
      case 'bookmark':
        return <Bookmark color={iconColor} size={iconSize} strokeWidth={1.5} />;
      case 'document':
        return <FileText color={iconColor} size={iconSize} strokeWidth={1.5} />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress} activeOpacity={0.7} testID={testID}>
      {/* Orange glow from top */}
      <LinearGradient
        colors={['rgba(212, 175, 55, 0.25)', 'rgba(212, 175, 55, 0.08)', 'rgba(212, 175, 55, 0)']}
        locations={[0, 0.4, 1]}
        style={styles.glowOverlay}
      />
      <View style={styles.container}>
        <View style={styles.iconContainer}>{renderIcon()}</View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: borderRadius.xxl,
    overflow: 'hidden',
    position: 'relative',
  },
  glowOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    borderTopLeftRadius: borderRadius.xxl,
    borderTopRightRadius: borderRadius.xxl,
    zIndex: 1,
    pointerEvents: 'none',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 15, 35, 0.85)',
    borderRadius: borderRadius.xxl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.15)',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.lg,
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
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
