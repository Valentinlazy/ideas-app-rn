import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Button} from 'react-native-elements'
import Expo from "expo";
import {iosClientId, androidClientId} from "../constants/authenticationIds";

export default class LogIn extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            name: '',
            userId: ''

        }
    }

    logOut = () => {
        const {navigation} = this.props;
        navigation.navigate('loginStack');
        this.setState({
            isLoggedIn: false,
            name: '',
            userId: ''
            });
    };

    signIn = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                iosClientId: iosClientId,
                androidClientId: androidClientId,
                scopes: ["profile", "email"]
            });

            if (result.type === "success") {
                this.setState({
                    isLoggedIn: true,
                    name: result.user.name,
                    userId: result.idToken
                });
                console.log(this.state);
                const {navigation} = this.props;
                navigation.navigate('drawerStack', {
                    logOut: this.logOut,
                });
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