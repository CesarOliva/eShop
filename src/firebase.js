import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkXXd8D0eu9BHgZGlaCunm4p1x-cKbhNE",
  authDomain: "eshop-21978.firebaseapp.com",
  projectId: "eshop-21978",
  storageBucket: "eshop-21978.firebasestorage.app",
  messagingSenderId: "16423510763",
  appId: "1:16423510763:web:38607eb05bad70c06494ae"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };