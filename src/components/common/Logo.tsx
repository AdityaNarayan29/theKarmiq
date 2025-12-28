import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path, G } from 'react-native-svg';
import { colors } from '@constants/theme';

interface LogoProps {
  size?: number;
  showStar?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 80, showStar = true }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox="0 0 100 100">
        {/* Star */}
        {showStar && (
          <Path
            d="M75 15 L77 20 L82 20 L78 24 L80 29 L75 26 L70 29 L72 24 L68 20 L73 20 Z"
            fill={colors.primary}
          />
        )}
        {/* Outer circle */}
        <Circle cx="50" cy="55" r="35" stroke={colors.primary} strokeWidth="2" fill="none" />
        {/* Inner ear/spiral shape */}
        <G transform="translate(50, 55)">
          <Path
            d="M0 -20
               C 15 -20, 20 -10, 20 0
               C 20 15, 10 20, 0 20
               C -10 20, -15 15, -15 5
               C -15 -5, -5 -10, 0 -10
               C 8 -10, 10 -5, 10 0
               C 10 8, 5 10, 0 10"
            stroke={colors.primary}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
