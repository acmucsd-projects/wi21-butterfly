import * as React from 'react'
import { colors } from '../assets/theme';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../screens/dashboard';
import Login from '../screens/login';
import ViewActivity from '../screens/viewactivity';
import Friends from '../screens/friends';
import PostActivity from '../screens/postactivity';
import PostActivityMore from '../screens/postactivitymore';
import LoginSignup from '../screens/loginsignup';
import Search from '../screens/search';
import SignUp from '../screens/signup';
import Settings from '../screens/settings';
import Notifications from '../screens/settingsPages/notifications'
import Display from '../screens/settingsPages/display'
import Privacy from '../screens/settingsPages/privacy'
import Help from '../screens/settingsPages/help'
import Logout from '../screens/settingsPages/logout'

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
            return <MaterialIcons name={iconName} size={30} color={color} />;
          } else if (route.name === 'Search') {
            iconName = 'eye';
            return <AntDesign name={iconName} size={30} color={color} />;
          }  else if (route.name === 'PostActivity') {
            iconName = 'upload';
            return <Feather name={iconName} size={30} color={color} />;
          } else if (route.name === 'Friends') {
            iconName = 'people-alt';
            return <MaterialIcons name={iconName} size={30} color={color} />;
          } else if (route.name === 'Settings') {
            iconName = 'settings-sharp';
            return <Ionicons name={iconName} size={30} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.orange,
        inactiveTintColor: 'black',
        showLabel: false,
        style: {
          borderTopWidth: 1.5,
          borderTopColor: 'black',
          height: '9%'}
      }} 
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
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name='PostActivityMore' 
          component={PostActivityMore}
          options={{ 
            title: 'more options',
            headerBackImage: () => <Ionicons name={'chevron-back'} size={30} color={colors.orange} />,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'OpenSans',
              fontSize: 23,
              marginTop: '-2.5%',
              marginLeft: '-10%',
            },
            headerShown: true,
            headerTintColor: colors.orange,
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowOpacity: 0,
              height: 122,
            },
          }}
        />
        <Stack.Screen
          name='Notifications' 
          component={Notifications}
          options={{ 
            title: 'Notifications',
            headerBackImage: () => <Ionicons name={'chevron-back'} size={30} color={colors.orange} />,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'OpenSans',
              fontSize: 23,
              marginTop: '-2.5%',
              marginLeft: '-10%',
            },
            headerShown: true,
            headerTintColor: colors.orange,
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowOpacity: 0,
              height: 122,
            },
          }}
        />
       <Stack.Screen
          name='Display' 
          component={Display}
          options={{ 
            title: 'Display',
            headerBackImage: () => <Ionicons name={'chevron-back'} size={30} color={colors.orange} />,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'OpenSans',
              fontSize: 23,
              marginTop: '-2.5%',
              marginLeft: '-10%',
            },
            headerShown: true,
            headerTintColor: colors.orange,
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowOpacity: 0,
              height: 122,
            },
          }}
        />
        <Stack.Screen
          name='Privacy' 
          component={Privacy}
          options={{ 
            title: 'Privacy',
            headerBackImage: () => <Ionicons name={'chevron-back'} size={30} color={colors.orange} />,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'OpenSans',
              fontSize: 23,
              marginTop: '-2.5%',
              marginLeft: '-10%',
            },
            headerShown: true,
            headerTintColor: colors.orange,
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowOpacity: 0,
              height: 122,
            },
          }}
        />
        <Stack.Screen
          name='Help' 
          component={Help}
          options={{ 
            title: 'Help',
            headerBackImage: () => <Ionicons name={'chevron-back'} size={30} color={colors.orange} />,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'OpenSans',
              fontSize: 23,
              marginTop: '-2.5%',
              marginLeft: '-10%',
            },
            headerShown: true,
            headerTintColor: colors.orange,
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowOpacity: 0,
              height: 122,
            },
          }}
        />
        <Stack.Screen
          name='Logout' 
          component={Logout}
          options={{ 
            title: 'Logout',
            headerBackImage: () => <Ionicons name={'chevron-back'} size={30} color={colors.orange} />,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'OpenSans',
              fontSize: 23,
              marginTop: '-2.5%',
              marginLeft: '-10%',
            },
            headerShown: true,
            headerTintColor: colors.orange,
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowOpacity: 0,
              height: 122,
            },
          }}
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