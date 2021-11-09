import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './app/screens/ProfileScreen';
import SearchScreen from './app/screens/SearchScreen';
import RemindersScreen from './app/screens/RemindersScreen';
import TodayScreen from './app/screens/TodayScreen';
import Colors from './app/screens/Colors';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from './app/screens/Colors';

const Tab = createBottomTabNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = '#FAFAFA';

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
      screenOptions = {({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.purple,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name == 'Today') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name == 'Reminders') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name == 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name == 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name = {iconName} size = {size} color = {color}/>;
        },
      })}>
        <Tab.Screen name = "Today" component = {TodayScreen} />
        <Tab.Screen name = "Reminders" component={RemindersScreen} />
        <Tab.Screen name = "Search" component = {SearchScreen} />
        <Tab.Screen name = "Profile" component = {ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
