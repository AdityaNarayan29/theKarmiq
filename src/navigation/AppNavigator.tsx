import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@screens/HomeScreen';
import { LessonsScreen } from '@screens/LessonsScreen';
import { KarmiqScreen } from '@screens/KarmiqScreen';
import { BlogsScreen } from '@screens/BlogsScreen';
import { MenuScreen } from '@screens/MenuScreen';
import { TabBarIcon } from '@components/navigation';
import { colors, fontSizes, spacing } from '@constants/theme';

export type TabParamList = {
  Home: undefined;
  Lessons: undefined;
  Karmiq: undefined;
  Blogs: undefined;
  Menu: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// Memoized icon render functions to avoid unstable nested components
const HomeIcon = ({ focused }: { focused: boolean }) => (
  <TabBarIcon name="home" focused={focused} />
);

const LessonsIcon = ({ focused }: { focused: boolean }) => (
  <TabBarIcon name="lessons" focused={focused} />
);

const KarmiqIcon = ({ focused }: { focused: boolean }) => (
  <TabBarIcon name="karmiq" focused={focused} />
);

const BlogsIcon = ({ focused }: { focused: boolean }) => (
  <TabBarIcon name="blogs" focused={focused} />
);

const MenuIcon = ({ focused }: { focused: boolean }) => (
  <TabBarIcon name="menu" focused={focused} />
);

const KarmiqLabel = () => null;

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.tabBarActive,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Lessons"
        component={LessonsScreen}
        options={{
          tabBarIcon: LessonsIcon,
        }}
      />
      <Tab.Screen
        name="Karmiq"
        component={KarmiqScreen}
        options={{
          tabBarIcon: KarmiqIcon,
          tabBarLabel: KarmiqLabel,
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={BlogsScreen}
        options={{
          tabBarIcon: BlogsIcon,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: MenuIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'rgba(15, 10, 25, 0.98)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
    height: 90,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  tabBarLabel: {
    fontSize: fontSizes.xs,
    fontWeight: '500',
    marginTop: spacing.xs,
  },
});
