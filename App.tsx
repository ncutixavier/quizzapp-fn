import React, { useContext } from 'react';
import ThemeProvider from './src/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import Login from './src/screens/Login'
import { ApolloProvider } from '@apollo/client';
import client from './src/config/apolloClient';
import { SafeAreaView, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
    <ThemeProvider>
      {/* <SafeAreaView style={styles.safeArea}> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </SafeAreaView> */}
    </ThemeProvider>
  </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

