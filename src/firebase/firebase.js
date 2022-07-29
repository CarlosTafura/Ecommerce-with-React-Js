// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDLsGdOXJp-89oKkuShLZHZDFum0equuA",
  authDomain: "autofix-d9af2.firebaseapp.com",
  projectId: "autofix-d9af2",
  storageBucket: "autofix-d9af2.appspot.com",
  messagingSenderId: "569763925513",
  appId: "1:569763925513:web:d39eba44d278f4059732d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);