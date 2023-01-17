import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjqEEzoY_uGLH3Vs2geXXW2YqUtVU_Gms",
  authDomain: "summative-a8abf.firebaseapp.com",
  projectId: "summative-a8abf",
  storageBucket: "summative-a8abf.appspot.com",
  messagingSenderId: "357094276513",
  appId: "1:357094276513:web:d4ac80c7a2ef081397dfe0",
  measurementId: "G-4QCJ8TQMDN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage }