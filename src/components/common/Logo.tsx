import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path, G } from 'react-native-svg';
import { colors } from '@constants/theme';

interface LogoProps {
  size?: number;
  showStar?: boolean;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 80,
  showStar = true,
  color = colors.primary,
}) => {
  const strokeWidth = size > 60 ? 3 : 2.5;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox="0 0 100 100">
        {/* Star - top left */}
        {showStar && (
          <Path
            d="M20 8 L22 14 L28 14 L23 18 L25 24 L20 20 L15 24 L17 18 L12 14 L18 14 Z"
            fill={color}
          />
        )}

        {/* Planet dot - left side below star */}
        <Circle cx="18" cy="42" r="5" fill={color} />

        {/* Outer crescent arc - wraps around the right side */}
        <Path
          d="M75 20
             C 92 30, 98 55, 90 75
             C 82 92, 60 98, 40 92"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />

        {/* Face profile - forehead, nose, lips, chin */}
        <Path
          d="M52 22
             C 62 22, 70 30, 70 42
             C 70 50, 66 54, 62 56
             L 58 58
             L 56 62
             L 52 64
             L 54 68
             L 50 70
             L 46 72
             C 38 76, 32 80, 28 85"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner arc connecting chin area */}
        <Path
          d="M28 85 C 38 90, 55 92, 68 88"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />

        {/* Ear outer shape */}
        <Path
          d="M60 38 C 72 38, 76 48, 74 58 C 72 66, 66 70, 58 68"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />

        {/* Ear spiral - inner detail */}
        <G transform="translate(62, 52)">
          <Path
            d="M0 -12
               C 10 -12, 14 -4, 14 4
               C 14 12, 8 16, 0 16
               C -8 16, -12 10, -12 2
               C -12 -4, -8 -8, -2 -8
               C 4 -8, 8 -4, 8 2
               C 8 7, 5 10, 0 10
               C -5 10, -8 7, -8 3
               C -8 -1, -5 -3, 0 -3
               C 4 -3, 6 0, 6 3
               C 6 5, 4 7, 1 7"
            stroke={color}
            strokeWidth={strokeWidth}
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
