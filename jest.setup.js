// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native').View;
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    GestureHandlerRootView: View,
    Directions: {},
  };
});

// Mock react-native-screens
jest.mock('react-native-screens', () => {
  const View = require('react-native').View;
  return {
    enableScreens: jest.fn(),
    Screen: View,
    ScreenContainer: View,
    NativeScreen: View,
    NativeScreenContainer: View,
    ScreenStack: View,
    ScreenStackHeaderConfig: View,
    ScreenStackHeaderSubview: View,
    ScreenStackHeaderBackButtonImage: View,
    enableFreeze: jest.fn(),
  };
});

// Mock @react-native-async-storage/async-storage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const View = require('react-native').View;
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaConsumer: ({ children }) => children(inset),
    SafeAreaView: View,
    useSafeAreaInsets: () => inset,
    useSafeAreaFrame: () => ({ x: 0, y: 0, width: 390, height: 844 }),
  };
});

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');

  const createMockComponent = displayName => {
    const Component = function SvgMock({ children, style, testID }) {
      return React.createElement(View, { style, testID }, children);
    };
    Component.displayName = displayName;
    return Component;
  };

  const Svg = createMockComponent('Svg');

  return {
    __esModule: true,
    default: Svg,
    Svg: Svg,
    Circle: createMockComponent('Circle'),
    Path: createMockComponent('Path'),
    G: createMockComponent('G'),
    Rect: createMockComponent('Rect'),
    Line: createMockComponent('Line'),
    Polygon: createMockComponent('Polygon'),
    Polyline: createMockComponent('Polyline'),
    Text: createMockComponent('SvgText'),
    TSpan: createMockComponent('TSpan'),
    TextPath: createMockComponent('TextPath'),
    Use: createMockComponent('Use'),
    Image: createMockComponent('SvgImage'),
    Symbol: createMockComponent('SvgSymbol'),
    Defs: createMockComponent('Defs'),
    LinearGradient: createMockComponent('LinearGradient'),
    RadialGradient: createMockComponent('RadialGradient'),
    Stop: createMockComponent('Stop'),
    ClipPath: createMockComponent('ClipPath'),
    Pattern: createMockComponent('Pattern'),
    Mask: createMockComponent('Mask'),
  };
});

// Mock lucide-react-native
jest.mock('lucide-react-native', () => {
  const React = require('react');
  const { View } = require('react-native');

  const createMockIcon = displayName => {
    const Icon = function MockIcon({ children, style, testID }) {
      return React.createElement(View, { style, testID }, children);
    };
    Icon.displayName = displayName;
    return Icon;
  };

  return {
    Home: createMockIcon('Home'),
    BookOpen: createMockIcon('BookOpen'),
    Newspaper: createMockIcon('Newspaper'),
    Menu: createMockIcon('Menu'),
    AlignJustify: createMockIcon('AlignJustify'),
    Bookmark: createMockIcon('Bookmark'),
    FileText: createMockIcon('FileText'),
  };
});

// Mock react-native-linear-gradient
jest.mock('react-native-linear-gradient', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockLinearGradient = ({ children, style }) => {
    return React.createElement(View, { style }, children);
  };
  MockLinearGradient.displayName = 'LinearGradient';
  return {
    __esModule: true,
    default: MockLinearGradient,
  };
});

// Global test timeout
jest.setTimeout(10000);
