// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/database";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDup9hG61q2DAYCfKFa7Afda0pZg2K5ELk",
  authDomain: "trash2treasure-7c39a.firebaseapp.com",
  projectId: "trash2treasure-7c39a",
  storageBucket: "trash2treasure-7c39a.appspot.com",
  messagingSenderId: "833720819662",
  appId: "1:833720819662:web:44895fbb6ca824c004159f",
  databaseURL: "https://trash2treasure-7c39a-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Get a reference to the Firestore service
export const firestore = getFirestore(app);

export default app;
