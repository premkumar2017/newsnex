// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these with your Firebase project credentials
const firebaseConfig = {
    apiKey: "AIzaSyA8H-kCprxS7RDDir0zVxfjm9PxxB45bkM",
    authDomain: "newsnex-822a6.firebaseapp.com",
    projectId: "newsnex-822a6",
    storageBucket: "newsnex-822a6.firebasestorage.app",
    messagingSenderId: "1015370468090",
    appId: "1:1015370468090:web:7942ce0a8c2070a1e2d743",
    measurementId: "G-80JV3BT219"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);
