// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXCXt5aYbs0QUJrUSZje_R4_BYJrplERk",
  authDomain: "shoppy-bd1c0.firebaseapp.com",
  databaseURL:
    "https://shoppy-bd1c0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-bd1c0",
  storageBucket: "shoppy-bd1c0.appspot.com",
  messagingSenderId: "680562546201",
  appId: "1:680562546201:web:f6208cff44ca77c0e2bc88",
  measurementId: "G-GZ72ZL7SQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
