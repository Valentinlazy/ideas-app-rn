import React from 'react';
import {Text} from 'react-native';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';
import MainPage from '../screens/MainPage';
import PersonalNotes from '../screens/PersonalNotes';
import Settings from '../screens/Settings';
import {Icon} from 'react-native-elements';

const DrawerNavigation = createDrawerNavigator({
    Home: {
        screen: MainPage,
    },
    PersonalNotes: {
        screen: PersonalNotes,
    },
    Settings: {
        screen : Settings,
    }

});

const DrawerStackNavigation = createStackNavigator({
    DrawerStack: DrawerNavigation
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'lightblue'},
        title: 'Ideas App',
        headerLeft: <Icon name='menu' type='Feather' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
    })
});

export default DrawerStackNavigation;