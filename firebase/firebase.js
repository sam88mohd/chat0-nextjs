// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVZcY_hAiGaz3H_n6CsomtGOxJ8jjOFXQ",
  authDomain: "chat0-3b234.firebaseapp.com",
  projectId: "chat0-3b234",
  storageBucket: "chat0-3b234.appspot.com",
  messagingSenderId: "849457780189",
  appId: "1:849457780189:web:ac05e7ed5a8d7a3ecfd234",
  measurementId: "G-QV0HJGC1PP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
