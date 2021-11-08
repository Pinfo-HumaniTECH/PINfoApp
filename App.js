import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './app/screens/ProfileScreen';
import SearchScreen from './app/screens/SearchScreen';
import RemindersScreen from './app/screens/RemindersScreen';

export default function App() {
  return <RemindersScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
