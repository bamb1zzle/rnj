// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYzpjj8m0_8jwPFUZC5fXLstMncHVPNF8",
    authDomain: "readinglist-f080d.firebaseapp.com",
    projectId: "readinglist-f080d",
    storageBucket: "readinglist-f080d.appspot.com",
    messagingSenderId: "737756515150",
    appId: "1:737756515150:web:a0f84a6ebce7d15fd96c1f",
    measurementId: "G-MEPGC0RL3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);