import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB0qwB9c_xkBWBi5GfkhhcJTHugVkAY6I",
  authDomain: "cyber-25c0c.firebaseapp.com",
  projectId: "cyber-25c0c",
  storageBucket: "cyber-25c0c.appspot.com",
  messagingSenderId: "894823365631",
  appId: "1:894823365631:web:c2c6025a9d6f63282545ca",
  measurementId: "G-XCTKR3TWDF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getFirestore(app);

export {auth,database}