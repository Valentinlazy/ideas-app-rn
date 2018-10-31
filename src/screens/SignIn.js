//@flow

import React from 'react';
import {
    View,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import {Button} from 'react-native-elements'
import Expo from "expo";
import {iosClientId, androidClientId} from "../constants/authenticationIds";

export default class SignIn extends React.Component<*> {

    signIn = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                iosClientId: iosClientId,
                androidClientId: androidClientId,
                scopes: ["profile", "email"]
            });

            if (result.type === "success") {
                console.log(result);
                // this.setState({
                //     isLoggedIn: true,
                //     name: result.user.name,
                //     userId: result.user.id
                // });
                AsyncStorage.multiSet([['userId', result.user.id], ['userName', result.user.name]]);
                const {navigation} = this.props;
                navigation.navigate('App');
            } else {
                console.log("cancelled")
            }
        } catch (e) {
            console.log("error", e)
        }
    };


    render() {
        return (
            <View style={styles.container}>
                <Button
                    raised
                    title='SIGN IN WITH GOOGLE'
                    backgroundColor='#457ed9'
                    color='white'
                    onPress={this.signIn}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8fcff',
    },
});