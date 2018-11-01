import React from 'react';
import {StyleSheet, View} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import DrawerNavigation from './navigation/DrawerNavigator';
import reducer from './modules/mainPageFeed';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <DrawerNavigation />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
