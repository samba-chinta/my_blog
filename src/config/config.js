// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH3hvh5z6n_Kl1yRdWPzPT6FFCCvpmACc",
  authDomain: "blog-21dcf.firebaseapp.com",
  projectId: "blog-21dcf",
  storageBucket: "blog-21dcf.appspot.com",
  messagingSenderId: "1010055943696",
  appId: "1:1010055943696:web:7e2693a307265782f99c95",
  measurementId: "G-QM15R5X7DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);