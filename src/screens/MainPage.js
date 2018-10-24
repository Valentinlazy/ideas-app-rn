import React from 'react';
import {
    FlatList,
    Text,
    View,
    StyleSheet
} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import MainPageFeed from '../containers/MainPageFeed';


export default class MainPage extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    data = [{
        title: 'Lorem ipsum',
        text: 'a lot of lorem ipsum a lot of lorem ipsum a lot of lorem ipsum',
        image: 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=332072f9d176b37db042ab986a829577&w=1000&q=80',
    }];


    render() {
        return (
            <View style={styles.container}>
                <MainPageFeed/>
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