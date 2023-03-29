// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADXAtzlp1HOCncBYIiG9GfKe7BJAZGA_M",
  authDomain: "stocks-firebase-auth.firebaseapp.com",
  projectId: "stocks-firebase-auth",
  storageBucket: "stocks-firebase-auth.appspot.com",
  messagingSenderId: "350855528258",
  appId: "1:350855528258:web:5985cf1b98cad6a696d2db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
