// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Nk0JW_OLWI9VM5cPRs9yRnP7BAS3CG4",
  authDomain: "market-staff.firebaseapp.com",
  projectId: "market-staff",
  storageBucket: "market-staff.appspot.com",
  messagingSenderId: "733711109647",
  appId: "1:733711109647:web:714fa23f49b762fda19d7a",
  measurementId: "G-8H9DF9GCQF"
};

import {GoogleAuthProvider, getAuth} from "firebase/auth"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider