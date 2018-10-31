import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import DrawerStackNavigator from './DrawerNavigator';
import SignIn from '../screens/SignIn';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';


// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator(
    {
        SignIn: SignIn
    },
    {
        headerMode: 'float',
        navigationOptions: {
            headerStyle: {backgroundColor: 'lightblue'},
            title: 'Ideas App'
        }
    });

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: DrawerStackNavigator,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);