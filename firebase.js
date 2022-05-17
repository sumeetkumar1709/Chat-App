import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCpXbMRkvXjQwuVT7oOlo57LcvIlnKoVlE",
    authDomain: "next-chat-app-5c860.firebaseapp.com",
    projectId: "next-chat-app-5c860",
    storageBucket: "next-chat-app-5c860.appspot.com",
    messagingSenderId: "307735708509",
    appId: "1:307735708509:web:4b543cd0156584b1e61eb4"
  };

//const app = !firebase.apps.length? firebase.initializeApp(firebaseConfig):firebase.app();

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db=getFirestore(app);
const auth=getAuth(app);
//const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();

export {db, auth, provider};

