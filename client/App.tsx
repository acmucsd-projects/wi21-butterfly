import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Navigator from './routes/appNavigator';


export default function App() {
  const [fontsLoaded] = useFonts ({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold' : require('./assets/fonts/OpenSans-SemiBold.ttf'),
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

