import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image,
    Button
} from 'react-native';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Personal notes',
        // drawerIcon: ({ tintColor }) => (
        //     <Image
        //         source={require('./notif-icon.png')}
        //         style={[styles.icon, {tintColor: tintColor}]}
        //     />
        // ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}