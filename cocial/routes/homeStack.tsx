import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Dashboard from '../screens/dashboard'
import Login from '../screens/login'
import ViewActivity from '../screens/viewactivity'
import Friends from '../screens/friends'
import PostActivity from '../screens/postactivity'
import LoginSignup from '../screens/loginsignup'
import Search from '../screens/search'
import SignUp from '../screens/signup'
import Settings from '../screens/settings'

const screens = {
    LoginSignup: {
        screen: LoginSignup
    },
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    },
    Dashboard: {
        screen: Dashboard
    },
    ViewActivity: {
        screen: ViewActivity
    },
    PostActivity: {
        screen: PostActivity
    },
    Friends: {
        screen: Friends
    },
    Search: {
        screen: Search
    },
    Settings: {
        screen: Settings
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerShown: false,
    }
});

export default createAppContainer(HomeStack);