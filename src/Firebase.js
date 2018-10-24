import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyB7GLZpv3hYESqIHAXleLL09gBcvJIxwo8",
    authDomain: "ideas-app-d984b.firebaseapp.com",
    databaseURL: "https://ideas-app-d984b.firebaseio.com",
    projectId: "ideas-app-d984b",
    storageBucket: "ideas-app-d984b.appspot.com",
    messagingSenderId: "445764346787"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase;