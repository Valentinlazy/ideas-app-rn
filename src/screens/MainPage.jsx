import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import MainPageFeed from '../containers/MainPageFeed';


export default class MainPage extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                <MainPageFeed />
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