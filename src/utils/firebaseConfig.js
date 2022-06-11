// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAufJViPXYJvj2OkxkBnuiRrcfyeZZvQ08",
  authDomain: "ecommerce-sheipeg.firebaseapp.com",
  projectId: "ecommerce-sheipeg",
  storageBucket: "ecommerce-sheipeg.appspot.com",
  messagingSenderId: "295204196460",
  appId: "1:295204196460:web:3486d1d4a11b16f3c70849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore init
const db = getFirestore (app);

export default db;