import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import useTheme from '../theme/useTheme'
import { Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;  // Define other screens as needed
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const SplashScreen = () => {
    const { theme } = useTheme()
    const navigation = useNavigation<NavigationProp>()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Login')
        }, 2000);
        return () => clearTimeout(timeout)
    }, [])

    return (
        <LinearGradient colors={theme.gradient} style={styles.container}>
            <Text style={{ ...styles.splash, color: theme.textColor }}>QUIZAPP</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    splash: {
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: 1.5
    }
})

export default SplashScreen