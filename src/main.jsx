import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaOsVGRuEivlZPzP0g6yBVTn8cCOlNhQo",
  authDomain: "ecommerce-blog-2768b.firebaseapp.com",
  projectId: "ecommerce-blog-2768b",
  storageBucket: "ecommerce-blog-2768b.appspot.com",
  messagingSenderId: "250941062769",
  appId: "1:250941062769:web:0d9a183f7e5e60644f25d0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
<>
<StrictMode>
<App />
</StrictMode>
</>
)
