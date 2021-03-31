import firebase from 'firebase'
// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyARd5MxfV9ISyVTl1q8UdbwsWEP7n8Ljh8",
  authDomain: "tiakbook.firebaseapp.com",
  databaseURL: "https://tiakbook-default-rtdb.firebaseio.com",
  projectId: "tiakbook",
  storageBucket: "tiakbook.appspot.com",
  messagingSenderId: "507163516396",
  appId: "1:507163516396:web:4aec8fbd4416178f1a74c9",
  measurementId: "G-23TBRFFVW2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export {db, auth};