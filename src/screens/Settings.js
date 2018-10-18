import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image,
    Button
} from 'react-native';

export default class Settings extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Settings',
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
                onPress={() => this.props.navigation.navigate('PersonalNotes')}
                title="Go to PersonalNotes"
            />
        );
    }
}