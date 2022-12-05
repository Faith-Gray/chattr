import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_QS2szua9av45lzCybcPKs73xlm6qQgk",
    authDomain: "chattr-5d00f.firebaseapp.com",
    projectId: "chattr-5d00f",
    storageBucket: "chattr-5d00f.appspot.com",
    messagingSenderId: "620935305432",
    appId: "1:620935305432:web:f033a127a471085d2f1fad"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

//database
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };