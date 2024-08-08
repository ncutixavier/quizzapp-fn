import React, { useContext } from 'react';
import AppContext from './AppContext';
import ThemeProvider from './src/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  );
}

