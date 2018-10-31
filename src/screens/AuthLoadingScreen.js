import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar, StyleSheet,
    View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this._getUserAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _getUserAsync = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');


            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            this.props.navigation.navigate(userId ? 'App' : 'Auth');
        }
        catch (e) {
            console.log("error", e)
        }
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8fcff',
    },
});