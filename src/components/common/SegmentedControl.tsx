import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, borderRadius, spacing, fontSizes } from '@constants/theme';

interface SegmentedControlProps {
  options: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  selectedIndex,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option}
          style={[styles.option, selectedIndex === index && styles.selectedOption]}
          onPress={() => onSelect(index)}
          activeOpacity={0.7}
        >
          <Text style={[styles.optionText, selectedIndex === index && styles.selectedOptionText]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundGlass,
    borderRadius: borderRadius.full,
    padding: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
  },
  option: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: colors.backgroundSecondary,
  },
  optionText: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  selectedOptionText: {
    color: colors.text,
    fontWeight: '600',
  },
});
