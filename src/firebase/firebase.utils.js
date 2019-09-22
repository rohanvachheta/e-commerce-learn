import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAlRixSam-AJYXkvy_lAtUCwTbQfEBf3-8",
  authDomain: "crwn-db-edfc6.firebaseapp.com",
  databaseURL: "https://crwn-db-edfc6.firebaseio.com",
  projectId: "crwn-db-edfc6",
  storageBucket: "",
  messagingSenderId: "223777125183",
  appId: "1:223777125183:web:d57686498c73b95a2c198a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
