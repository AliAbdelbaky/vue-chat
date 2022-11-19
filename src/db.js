import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyB5Wag8CVeJHC6_l25Ie9KkiBeweQdSeBY",
    authDomain: "vue-chat-550a5.firebaseapp.com",
    projectId: "vue-chat-550a5",
    storageBucket: "vue-chat-550a5.appspot.com",
    messagingSenderId: "199325899621",
    appId: "1:199325899621:web:5962fb62816b51c7ca5f8c",
    databaseURL: "https://vue-chat-550a5-default-rtdb.europe-west1.firebasedatabase.app/"
};

const db = firebase.initializeApp(firebaseConfig);

export default db;