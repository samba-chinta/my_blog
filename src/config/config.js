import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDH3hvh5z6n_Kl1yRdWPzPT6FFCCvpmACc",
  authDomain: "blog-21dcf.firebaseapp.com",
  databaseURL: "https://blog-21dcf-default-rtdb.firebaseio.com",
  projectId: "blog-21dcf",
  storageBucket: "blog-21dcf.appspot.com",
  messagingSenderId: "1010055943696",
  appId: "1:1010055943696:web:7e2693a307265782f99c95",
  measurementId: "G-QM15R5X7DP"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;