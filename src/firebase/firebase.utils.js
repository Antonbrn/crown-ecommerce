import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCTx9gpGecEuITq5ys5Nbuiztc6H6-sh70",
  authDomain: "crown-db-fdd30.firebaseapp.com",
  projectId: "crown-db-fdd30",
  storageBucket: "crown-db-fdd30.appspot.com",
  messagingSenderId: "939123037635",
  appId: "1:939123037635:web:b14a4bc23326d7233a9976",
  measurementId: "G-LSCTXW6YZX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//För google signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
