// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAAs7t5NXYNF3yn8T8cbZZLrQID_Ed5aIQ",
    authDomain: "authusersforalwaqt.firebaseapp.com",
    projectId: "authusersforalwaqt",
    storageBucket: "authusersforalwaqt.firebasestorage.app",
    messagingSenderId: "475951667280",
    appId: "1:475951667280:web:7a6ffe0b38e3f89fdc1955",
    measurementId: "G-975CXEVP6Q"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export default firebase;

