// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmUmMJXD0_KyEY-MTTObFa5i1lc58cAz8",
  authDomain: "slui-aebf0.firebaseapp.com",
  projectId: "slui-aebf0",
  storageBucket: "slui-aebf0.appspot.com",
  messagingSenderId: "407617459000",
  appId: "1:407617459000:web:ccc3620607035d6d2f27cd",
  measurementId: "G-W100FLLX90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
