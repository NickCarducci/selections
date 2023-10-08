import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8cRfh6xrKquKllYuEJ33-5r3S7aKDNnE",
  authDomain: "selections-pro.firebaseapp.com",
  projectId: "selections-pro",
  storageBucket: "selections-pro.appspot.com",
  messagingSenderId: "650503997170",
  appId: "1:650503997170:web:8b26fd975753939c7fb26b"
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
