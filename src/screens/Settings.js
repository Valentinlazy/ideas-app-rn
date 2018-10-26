import React from 'react';
import {
    Button
} from 'react-native';

export default class Settings extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Settings',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('PersonalNotes')}
                title="Go to PersonalNotes"
            />
        );
    }
}