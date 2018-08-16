
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAOsmbujN_s-Pkw3pKVktErzRvLPVP5MLk",
    authDomain: "roomie-f1aff.firebaseapp.com",
    databaseURL: "https://roomie-f1aff.firebaseio.com",
    projectId: "roomie-f1aff",
    storageBucket: "roomie-f1aff.appspot.com",
    messagingSenderId: "806251374128"
});

export default firebase;