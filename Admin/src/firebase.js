// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-qR55DxuadhKVGGA7VtvA3kJjhttnGTo",
  authDomain: "kaloriin-project.firebaseapp.com",
  projectId: "kaloriin-project",
  storageBucket: "kaloriin-project.appspot.com",
  messagingSenderId: "1019423727941",
  appId: "1:1019423727941:web:7b305079210d22d4255e2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app)
