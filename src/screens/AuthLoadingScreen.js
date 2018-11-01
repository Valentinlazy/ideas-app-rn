//@flow

import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar, StyleSheet,
    View,
} from 'react-native';
import {NavigationScreenProp, NavigationStateRoute} from "react-navigation";

type Props = {
    navigation: NavigationScreenProp<NavigationStateRoute>
};

export default class AuthLoadingScreen extends React.Component<Props> {

    constructor(props: Object) {
        super(props);
        this._getUserAsync();
    }

    _getUserAsync = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            const {navigation} = this.props;
            navigation.navigate(userId ? 'App' : 'Auth');
        }
        catch (e) {
            console.log("error", e)
        }
    };

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