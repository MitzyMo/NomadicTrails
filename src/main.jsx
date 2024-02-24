import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from "firebase/app";

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
