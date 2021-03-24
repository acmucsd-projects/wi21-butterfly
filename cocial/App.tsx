import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './screens/dashboard'
import Login from './screens/login'
import viewActivity from './screens/viewactivity'
import Friends from './screens/friends'
import PostActivity from './screens/postactivity'
import LoginSignup from './screens/loginsignup'
import Search from './screens/search'
import CreateAppContainer from './routes/homeStack'
export default function App() {
  return (
    // // <Dashboard/>
    //<LoginSignup/>
    //<Login/>
    //<Friends/>
    //<viewActivity/>
    // <PostActivity />
    // <Search />
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View> 
    < CreateAppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
