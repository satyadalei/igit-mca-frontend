// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiDlNuReV9ziIdFUeyoMXjmqiFcIiEgV4",
  authDomain: "igit-mca-web.firebaseapp.com",
  projectId: "igit-mca-web",
  storageBucket: "igit-mca-web.appspot.com",
  messagingSenderId: "1010313860858",
  appId: "1:1010313860858:web:805905731985ad693cdb43",
  measurementId: "G-ZHP4TJZ7D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);