// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr3PCE2HqAuXjqh7SoBG4npAmEaeLJwmI",
  authDomain: "tailr-90dca.firebaseapp.com",
  projectId: "tailr-90dca",
  storageBucket: "tailr-90dca.appspot.com",
  messagingSenderId: "30257588074",
  appId: "1:30257588074:web:9f0df77686f5f5bfbfa713",
  measurementId: "G-FPRKS9V5DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
