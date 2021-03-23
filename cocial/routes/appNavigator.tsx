import * as React from 'react'
import { colors } from '../assets/theme';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../screens/dashboard'
import Login from '../screens/login'
import ViewActivity from '../screens/viewactivity'
import Friends from '../screens/friends'
import PostActivity from '../screens/postactivity'
import LoginSignup from '../screens/loginsignup'
import Search from '../screens/search'
import SignUp from '../screens/signup'
import Settings from '../screens/settings'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (focused) {
            color = colors.orange;
          }
          else {
            color = colors.blue;
          }
    
          if (route.name === 'Dashboard') {
            iconName = 'dashboard';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Friends') {
            iconName = 'people-alt';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'PostActivity') {
            iconName = 'upload';
            return <Feather name={iconName} size={size} color={color} />;
          } else if (route.name === 'Search') {
            iconName = 'eye';
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'Settings') {
            iconName = 'settings-sharp';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="PostActivity" component={PostActivity} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}


export default function MainStackNavigator() {
    return (
     <NavigationContainer>
      <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen
          name='LoginSignup'
          component={LoginSignup}
          options={{ title: 'LoginSignup' }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ title: 'SignUp' }}
        />
        <Stack.Screen
          name='Dashboard'
          component={MainTabNavigator}
          options={{ title: 'Dashboard' }}

        />
        <Stack.Screen
          name='ViewActivity' 
          component={ViewActivity}
          options={{ title: 'ViewActivity' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
// const screens = {
//     LoginSignup: {
//         screen: LoginSignup
//     },
//     Login: {
//         screen: Login
//     },
//     SignUp: {
//         screen: SignUp
//     },
//     Dashboard: {
//         screen: Dashboard
//     },
//     ViewActivity: {
//         screen: ViewActivity
//     },
//     PostActivity: {
//         screen: PostActivity
//     },
//     Friends: {
//         screen: Friends
//     },
//     Search: {
//         screen: Search
//     },
//     Settings: {
//         screen: Settings
//     }
// }

// const HomeStack = createStackNavigator(screens, {
//     defaultNavigationOptions:{
//         headerShown: false,
//     }
// });

// export default createAppContainer(HomeStack);