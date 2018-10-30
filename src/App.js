import React from 'react';
import Expo from 'expo';
import {StyleSheet, View} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Navigator from './navigation/DrawerNavigator';
import LogIn from './screens/LogIn';
import reducer from './modules/mainPageFeed';
import iOSid from './constants/authenticationIds';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoggedIn: false,
    //         name: '',
    //
    //     }
    // }
    //
    // signIn = async () => {
    //     try {
    //         const result = await Expo.Google.logInAsync({
    //             iosClientId: iOSid,
    //             scopes: ["profile", "email"]
    //         });
    //
    //         if (result.type === "success") {
    //             this.setState({
    //                 isLoggedIn: true,
    //                 name: result.user.name
    //             })
    //         } else {
    //             console.log("cancelled")
    //         }
    //     } catch (e) {
    //         console.log("error", e)
    //     }
    // };

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                        <Navigator />
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
