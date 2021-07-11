import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Rajdhani_600SemiBold, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { HoroscopeProvider } from './src/Contexts/AppContext';
import { Routes } from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

    const [fontsLoaded] = useFonts({
        Rajdhani_600SemiBold,
        Rajdhani_700Bold
    })

    if (!fontsLoaded)
        return <AppLoading />
    return (
        <NavigationContainer>
            <StatusBar style='light'
                backgroundColor='transparent'
                translucent
            />
            <HoroscopeProvider>
                <Routes />
            </HoroscopeProvider>

        </NavigationContainer>
    );
}
