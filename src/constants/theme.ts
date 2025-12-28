export const colors = {
  // Primary brand colors
  primary: '#D4AF37', // Gold/Yellow accent
  primaryLight: '#F5D76E',
  secondary: '#6B5B95', // Purple accent

  // Background colors (dark cosmic theme)
  background: '#1A1429', // Deep purple/navy
  backgroundSecondary: '#2D2442', // Lighter purple card background
  backgroundCard: 'rgba(45, 36, 66, 0.8)', // Semi-transparent card
  backgroundGlass: 'rgba(45, 36, 66, 0.6)', // Glass effect

  // Text colors
  text: '#FFFFFF',
  textSecondary: '#B8B5C3',
  textMuted: '#7A7789',
  textGold: '#D4AF37',

  // UI colors
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  border: 'rgba(255, 255, 255, 0.1)',
  borderLight: 'rgba(255, 255, 255, 0.2)',

  // Basic colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Tab bar
  tabBarBackground: 'rgba(26, 20, 41, 0.95)',
  tabBarActive: '#D4AF37',
  tabBarInactive: '#7A7789',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
} as const;

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  button: {
    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
} as const;

export const theme = {
  colors,
  spacing,
  fontSizes,
  borderRadius,
  shadows,
} as const;

export type Theme = typeof theme;
