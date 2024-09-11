// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFo-7wa-r009mov61UeTfSkXaWI51s9B4",
  authDomain: "memory-lane-35605.firebaseapp.com",
  projectId: "memory-lane-35605",
  storageBucket: "memory-lane-35605.appspot.com",
  messagingSenderId: "275720868099",
  appId: "1:275720868099:web:e36c261048d54004e99936",
  measurementId: "G-R0T1Y0HP64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);