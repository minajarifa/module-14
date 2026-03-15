// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClYFMdyhrIghsqkXJ0DxA5E7LqaDFigPQ",
  authDomain: "boi-poka-dcf3d.firebaseapp.com",
  projectId: "boi-poka-dcf3d",
  storageBucket: "boi-poka-dcf3d.firebasestorage.app",
  messagingSenderId: "281375636408",
  appId: "1:281375636408:web:cf337c904e59ca306e6d4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
