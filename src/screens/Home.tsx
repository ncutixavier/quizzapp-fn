// Home
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Questions from '../components/Questions';
import client from '../config/apolloClient';
import { ApolloProvider } from '@apollo/client';
import useTheme from '../theme/useTheme';

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <StatusBar
        barStyle={theme.backgroundColor === '#000000' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <View style={{ ...styles.container, backgroundColor: theme.backgroundColor }}>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={{ color: theme.textColor }}>Toggle Theme</Text>
        </TouchableOpacity>
        <Questions />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  }
});
