import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage }from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-ed717.firebaseapp.com",
  projectId: "chat-app-ed717",
  storageBucket: "chat-app-ed717.appspot.com",
  messagingSenderId: "95653326160",
  appId: "1:95653326160:web:6f5bc6e97356ae96869055",
  measurementId: "G-G8NRT5JMKZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Get Auth and Firestore instances
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
