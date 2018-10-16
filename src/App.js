import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

export default class App extends React.Component {
    componentDidMount() {
        const config = {
            apiKey: "AIzaSyB7GLZpv3hYESqIHAXleLL09gBcvJIxwo8",
            authDomain: "ideas-app-d984b.firebaseapp.com",
            databaseURL: "https://ideas-app-d984b.firebaseio.com",
            projectId: "ideas-app-d984b",
            storageBucket: "ideas-app-d984b.appspot.com",
            messagingSenderId: "445764346787"
        };
        firebase.initializeApp(config);
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
