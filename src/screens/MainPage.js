import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image,
    Button
} from 'react-native';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        // drawerIcon: ({ tintColor }) => (
        //     <Image
        //         source={require('./chats-icon.png')}
        //         style={[styles.icon, {tintColor: tintColor}]}
        //     />
        // ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}