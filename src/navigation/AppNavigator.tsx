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
          tabBarIcon: ({ focused }) => <TabBarIcon name="home" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Lessons"
        component={LessonsScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="lessons" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Karmiq"
        component={KarmiqScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="karmiq" focused={focused} />,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={BlogsScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="blogs" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="menu" focused={focused} />,
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
    backgroundColor: colors.tabBarBackground,
    borderTopWidth: 0,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    height: 85,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  tabBarLabel: {
    fontSize: fontSizes.xs,
    fontWeight: '500',
    marginTop: spacing.xs,
  },
});
