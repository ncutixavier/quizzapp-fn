import React, { useContext } from 'react';
import ThemeProvider from './src/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import { ApolloProvider } from '@apollo/client';
import client from './src/config/apolloClient';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

