import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBgPIOEe1d34T2iCmrlV8EmTglFQgPtMqM",
  authDomain: "oshop-development.firebaseapp.com",
  projectId: "oshop-development",
  storageBucket: "oshop-development.appspot.com",
  messagingSenderId: "606183501378",
  appId: "1:606183501378:web:325f0fe415e2ab650b47db"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };