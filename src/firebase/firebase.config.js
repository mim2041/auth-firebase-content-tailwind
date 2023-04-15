// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtXnwLtPzEk8MjTpQZl7q5zFh87t8Q2bY",
  authDomain: "auth-firebase-context-ta-fc6ed.firebaseapp.com",
  projectId: "auth-firebase-context-ta-fc6ed",
  storageBucket: "auth-firebase-context-ta-fc6ed.appspot.com",
  messagingSenderId: "667307163110",
  appId: "1:667307163110:web:2a758232e67767478bea27",
  measurementId: "G-TMVB95XGRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;