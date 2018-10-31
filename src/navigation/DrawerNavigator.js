// @flow

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    AsyncStorage
} from 'react-native';
import {createDrawerNavigator, createStackNavigator, SafeAreaView, DrawerItems} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import MainPage from '../screens/MainPage';
import PersonalNotes from '../screens/PersonalNotes';
import Settings from '../screens/Settings';

const DrawerWithLogoutButton = (props) => (
    <ScrollView>
        <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
            <DrawerItems {...props} />
            <View style={styles.iconStyle}>
            <Icon
                name='log-out'
                type='feather'
                onPress={async () => {
                    await AsyncStorage.multiRemove(['userId', 'userName']);
                    props.navigation.navigate('Auth');
                }}
            />
            </View>
        </SafeAreaView>
    </ScrollView>
);

const DrawerNavigation = createDrawerNavigator({
        Home: {
            screen: MainPage,
        },
        PersonalNotes: {
            screen: PersonalNotes,
        },
        Settings: {
            screen: Settings,
        },
    },
    {
        contentComponent: DrawerWithLogoutButton,
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
        // headerRight: <Icon
        //     name='log-out'
        //     type='feather'
        //     onPress={() => {
        //         let logOut = navigation.getParam('logOut');
        //         console.log(navigation.getParam('logOut'));
        //         logOut();
        //     }}
        // />
    }),
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    iconStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 16,
    }
});

export default DrawerStackNavigation;