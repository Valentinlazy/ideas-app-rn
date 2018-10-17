import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import MainPage from '../screens/MainPage';
import PersonalNotes from '../screens/PersonalNotes';

const DrawerNavigation = createDrawerNavigator ({
    Home: {
        screen: MainPage,
    },
    PersonalNotes: {
        screen: PersonalNotes,
    },
});

const DrawerStackNavigation = createStackNavigator({
    DrawerStack: DrawerNavigation
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'lightblue'},
        title: 'Ideas App',
        headerLeft: <Text onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>Menu</Text>
    })
});

export default DrawerStackNavigation;