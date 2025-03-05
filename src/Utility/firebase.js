import firebase from "firebase/compat/app";



// auth
import {getAuth} from "firebase/auth"
// import "firebase/compat/firestore"
import { getFirestore } from "firebase/firestore";

import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG_nPGR_uIf55BUv5edMs1_Ro2MgBpWUI",
  authDomain: "clone-6dc63.firebaseapp.com",
  projectId: "clone-6dc63",
  storageBucket: "clone-6dc63.firebasestorage.app",
  messagingSenderId: "126010819578",
  appId: "1:126010819578:web:8b2a6e511eaaa0967d5a43"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)