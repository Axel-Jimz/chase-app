// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTVxtC7ixi0-L7PzOf29zb7R6Kp7wimBA",
  authDomain: "web-page-b8037.firebaseapp.com",
  projectId: "web-page-b8037",
  storageBucket: "web-page-b8037.appspot.com",
  messagingSenderId: "406881212130",
  appId: "1:406881212130:web:1a12a7eb82ad37c58eb0bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);