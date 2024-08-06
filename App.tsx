import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Questions from './src/screens/Questions';
import client from './src/config/apolloClient';
import { ApolloProvider } from '@apollo/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text style={styles.title}>Proviza App!</Text>
        <Questions />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00291A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#fff",
    fontSize: 20
  }
});
