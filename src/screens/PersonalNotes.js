import React from 'react';
import {
    Button
} from 'react-native';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Personal notes',
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