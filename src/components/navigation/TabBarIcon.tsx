import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Home, BookOpen, Newspaper, AlignJustify } from 'lucide-react-native';
import Svg, { Circle, Path, G, Defs, RadialGradient, Stop } from 'react-native-svg';
import { colors } from '@constants/theme';

interface TabBarIconProps {
  name: 'home' | 'lessons' | 'karmiq' | 'blogs' | 'menu';
  focused: boolean;
  size?: number;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused, size = 24 }) => {
  const color = focused ? colors.tabBarActive : colors.tabBarInactive;
  const strokeWidth = focused ? 2 : 1.5;

  const renderIcon = () => {
    switch (name) {
      case 'home':
        return <Home color={color} size={size} strokeWidth={strokeWidth} />;

      case 'lessons':
        return <BookOpen color={color} size={size} strokeWidth={strokeWidth} />;

      case 'karmiq':
        // Center tab - main chat feature with orange/gold aesthetic
        const iconColor = colors.primary; // Always gold/orange
        return (
          <View style={styles.centerIconContainer}>
            {/* Outer glow effect - always visible */}
            <View style={styles.glowContainer}>
              <Svg width={110} height={110} viewBox="0 0 110 110">
                <Defs>
                  <RadialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
                    <Stop
                      offset="0%"
                      stopColor={colors.primary}
                      stopOpacity={focused ? '0.8' : '0.4'}
                    />
                    <Stop
                      offset="25%"
                      stopColor={colors.primary}
                      stopOpacity={focused ? '0.5' : '0.25'}
                    />
                    <Stop
                      offset="50%"
                      stopColor={colors.primary}
                      stopOpacity={focused ? '0.2' : '0.1'}
                    />
                    <Stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
                  </RadialGradient>
                </Defs>
                <Circle cx="55" cy="55" r="55" fill="url(#outerGlow)" />
              </Svg>
            </View>
            <View style={[styles.centerIcon, focused && styles.centerIconFocused]}>
              <Svg width={30} height={30} viewBox="0 0 50 50">
                {/* Outer circle */}
                <Circle cx="25" cy="25" r="20" stroke={iconColor} strokeWidth="2.5" fill="none" />
                <G transform="translate(25, 25)">
                  {/* Spiral - the Karmiq symbol */}
                  <Path
                    d="M0 -11
                       C 8 -11, 11 -5, 11 1
                       C 11 8, 5 11, -1 11
                       C -7 11, -10 6, -10 1
                       C -10 -4, -6 -6, -1 -6
                       C 4 -6, 6 -3, 6 1
                       C 6 5, 3 7, 0 7
                       C -3 7, -5 5, -5 2
                       C -5 0, -3 -1, 0 -1
                       C 2 -1, 3 0, 3 2"
                    stroke={iconColor}
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </G>
              </Svg>
            </View>
          </View>
        );

      case 'blogs':
        return <Newspaper color={color} size={size} strokeWidth={strokeWidth} />;

      case 'menu':
        return <AlignJustify color={color} size={size} strokeWidth={strokeWidth} />;

      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderIcon()}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
  glowContainer: {
    position: 'absolute',
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: 'rgba(15, 10, 25, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  centerIconFocused: {
    borderWidth: 2.5,
    shadowOpacity: 0.6,
    shadowRadius: 15,
  },
});
