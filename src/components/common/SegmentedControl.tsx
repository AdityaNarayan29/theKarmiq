import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  LayoutChangeEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
  const translateX = useRef(new Animated.Value(0)).current;
  const [segmentWidth, setSegmentWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    const calculatedWidth = (width - spacing.xs * 2) / options.length;
    setSegmentWidth(calculatedWidth);
    // Set initial position without animation
    translateX.setValue(selectedIndex * calculatedWidth);
  };

  useEffect(() => {
    if (segmentWidth > 0) {
      Animated.spring(translateX, {
        toValue: selectedIndex * segmentWidth,
        friction: 10,
        tension: 60,
        useNativeDriver: true,
      }).start();
    }
  }, [selectedIndex, segmentWidth, translateX]);

  return (
    <View style={styles.container} onLayout={handleLayout}>
      {/* Animated sliding indicator with gradient */}
      {segmentWidth > 0 && (
        <Animated.View
          style={[
            styles.sliderWrapper,
            {
              width: segmentWidth,
              transform: [{ translateX }],
            },
          ]}
        >
          <LinearGradient
            colors={[
              'rgba(212, 175, 55, 0.25)',
              'rgba(212, 175, 55, 0.12)',
              'rgba(212, 175, 55, 0.05)',
            ]}
            locations={[0, 0.5, 1]}
            style={styles.sliderGradient}
          />
          <View style={styles.sliderBorder} />
        </Animated.View>
      )}

      {/* Options */}
      {options.map((option, index) => (
        <TouchableOpacity
          key={option}
          style={styles.option}
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: borderRadius.full,
    padding: spacing.xs,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.1)',
    position: 'relative',
  },
  sliderWrapper: {
    position: 'absolute',
    top: spacing.xs,
    left: spacing.xs,
    bottom: spacing.xs,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  sliderGradient: {
    flex: 1,
    borderRadius: borderRadius.full,
  },
  sliderBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)',
  },
  option: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  optionText: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  selectedOptionText: {
    color: colors.textGold,
    fontWeight: '600',
  },
});
