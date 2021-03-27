import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/appNavigator';


export default function App() {
  const [fontsLoaded] = useFonts ({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold' : require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'GlacialIndifference-Regular' : require('./assets/fonts/GlacialIndifference-Regular.ttf'),
    'GlacialIndifference-Italic' : require('./assets/fonts/GlacialIndifference-Italic.ttf'),
    'GlacialIndifference-Bold' : require('./assets/fonts/GlacialIndifference-Bold.ttf'),
  })
  if (fontsLoaded) {
    return (
      <Navigator />
    );
  }
  else {
    return ( 
      <AppLoading />
    )
  } 
}

