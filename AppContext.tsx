import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Questions from './src/screens/Questions';
import client from './src/config/apolloClient';
import { ApolloProvider } from '@apollo/client';
import useTheme from './src/theme/useTheme';

export default function AppContext() {
  const { theme, toggleTheme } = useTheme()

  return (
    <ApolloProvider client={client}>
      <StatusBar
        barStyle={theme.backgroundColor === '#000000' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <View style={{ ...styles.container, backgroundColor: theme.backgroundColor }}>
        <Text style={{ ...styles.title, color: theme.textColor }}>Proviza App!</Text>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={{ color: theme.textColor }}>Toggle Theme</Text>
        </TouchableOpacity>
        <Questions />
      </View>
    </ApolloProvider>
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
