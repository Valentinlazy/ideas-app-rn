// @flow

import React from 'react';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import MainPage from '../screens/MainPage';
import PersonalNotes from '../screens/PersonalNotes';
import Settings from '../screens/Settings';
import LogIn from '../screens/LogIn';

const DrawerNavigation = createDrawerNavigator({
    Home: {
        screen: MainPage,
    },
    PersonalNotes: {
        screen: PersonalNotes,
    },
    Settings: {
        screen: Settings,
    }

});

const DrawerStackNavigation = createStackNavigator({
    DrawerStack: DrawerNavigation
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'lightblue'},
        title: 'Ideas App',
        headerLeft: <Icon
            name='menu'
            type='feather'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />,
        headerRight: <Icon
            name='log-out'
            type='feather'
            onPress={() => {
                let logOut = navigation.getParam('logOut');
                console.log(navigation.getParam('logOut'));
                logOut();
            }}
        />
    })
});

const LoginStack = createStackNavigator({
    LoginScreen: {
        screen: LogIn,
    }
}, {
    headerMode: 'float',
    navigationOptions: {
        headerStyle: {backgroundColor: 'lightblue'},
        title: 'Ideas App'
    }
});

const PrimaryNav = createStackNavigator({
    loginStack: {
        screen: LoginStack
    },
    drawerStack: {
        screen: DrawerStackNavigation
    }
}, {
    headerMode: 'none',
    title: 'Ideas App',
    initialRouteName: 'loginStack',
});


export default PrimaryNav;