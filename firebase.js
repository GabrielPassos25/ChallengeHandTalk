import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { Alert } from 'react-native';

const firebaseConfig = {
    apiKey: "AIzaSyBqNjyb7U4YOBVIMmirfwDOPCZabvVqtwE",
    authDomain: "challengehandtalk.firebaseapp.com",
    projectId: "challengehandtalk",
    storageBucket: "challengehandtalk.appspot.com",
    messagingSenderId: "579370551060",
    appId: "1:579370551060:web:8d2d52b05a80d00c312401",
    measurementId: "G-YDQH0WQ7ZT"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;