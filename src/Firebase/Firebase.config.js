// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIzuRMrzBU_h7Fdz9G9oKc3ofMV15srRE",
  authDomain: "moha-milon-auth-9629d.firebaseapp.com",
  projectId: "moha-milon-auth-9629d",
  storageBucket: "moha-milon-auth-9629d.appspot.com",
  messagingSenderId: "42636668622",
  appId: "1:42636668622:web:c11b7f1e8ca95f4bb9ea9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;