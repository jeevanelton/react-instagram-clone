import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBEV1YEntgLymRfqf3c_e45DEBhbC6ft1M",
  authDomain: "instagram-clone-1dec2.firebaseapp.com",
  databaseURL: "https://instagram-clone-1dec2.firebaseio.com",
  projectId: "instagram-clone-1dec2",
  storageBucket: "instagram-clone-1dec2.appspot.com",
  messagingSenderId: "147487662153",
  appId: "1:147487662153:web:542864619e218382135f98",
  measurementId: "G-WVQ9V1N583",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
