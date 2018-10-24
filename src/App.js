import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import DrawerNavigation from './navigation/DrawerNavigator';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './modules/mainPageFeed';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
    // componentDidMount() {
    //     const config = {
    //         apiKey: "AIzaSyB7GLZpv3hYESqIHAXleLL09gBcvJIxwo8",
    //         authDomain: "ideas-app-d984b.firebaseapp.com",
    //         databaseURL: "https://ideas-app-d984b.firebaseio.com",
    //         projectId: "ideas-app-d984b",
    //         storageBucket: "ideas-app-d984b.appspot.com",
    //         messagingSenderId: "445764346787"
    //     };
    //     if (!firebase.apps.length) {
    //         firebase.initializeApp(config);
    //     }
    // }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <DrawerNavigation/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
