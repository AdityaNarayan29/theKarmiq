import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Home, BookOpen, Newspaper, Menu } from 'lucide-react-native';
import Svg, { Circle, Path, G } from 'react-native-svg';
import { colors } from '@constants/theme';

interface TabBarIconProps {
  name: 'home' | 'lessons' | 'karmiq' | 'blogs' | 'menu';
  focused: boolean;
  size?: number;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused, size = 24 }) => {
  const color = focused ? colors.tabBarActive : colors.tabBarInactive;
  const strokeWidth = focused ? 2.5 : 2;

  const renderIcon = () => {
    switch (name) {
      case 'home':
        return <Home color={color} size={size} strokeWidth={strokeWidth} />;

      case 'lessons':
        return <BookOpen color={color} size={size} strokeWidth={strokeWidth} />;

      case 'karmiq':
        // Center tab with custom logo icon (keeping custom SVG for brand identity)
        return (
          <View style={styles.centerIconContainer}>
            <View style={[styles.centerIcon, focused && styles.centerIconFocused]}>
              <Svg width={28} height={28} viewBox="0 0 50 50">
                <Circle
                  cx="25"
                  cy="25"
                  r="20"
                  stroke={focused ? colors.primary : colors.tabBarInactive}
                  strokeWidth="2"
                  fill="none"
                />
                <G transform="translate(25, 25)">
                  <Path
                    d="M0 -12
                       C 9 -12, 12 -6, 12 0
                       C 12 9, 6 12, 0 12
                       C -6 12, -9 9, -9 3
                       C -9 -3, -3 -6, 0 -6
                       C 5 -6, 6 -3, 6 0
                       C 6 5, 3 6, 0 6"
                    stroke={focused ? colors.primary : colors.tabBarInactive}
                    strokeWidth="2"
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
        return <Menu color={color} size={size} strokeWidth={strokeWidth} />;

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
  centerIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.tabBarInactive,
  },
  centerIconFocused: {
    borderColor: colors.primary,
  },
});
