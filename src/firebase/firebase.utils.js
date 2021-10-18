import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB_lABBP1F1pyEfVc8tCgNbl6KMEqJXox8",
  authDomain: "crwn-db-eb91e.firebaseapp.com",
  projectId: "crwn-db-eb91e",
  storageBucket: "crwn-db-eb91e.appspot.com",
  messagingSenderId: "196686599043",
  appId: "1:196686599043:web:35978af77d6ff80def9cb6",
  measurementId: "G-Z41MDK5XHC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;