import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBqNjyb7U4YOBVIMmirfwDOPCZabvVqtwE",
    authDomain: "challengehandtalk.firebaseapp.com",
    databaseURL: "https://challengehandtalk-default-rtdb.firebaseio.com",
    projectId: "challengehandtalk",
    storageBucket: "challengehandtalk.appspot.com",
    messagingSenderId: "579370551060",
    appId: "1:579370551060:web:8d2d52b05a80d00c312401",
    measurementId: "G-YDQH0WQ7ZT"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;