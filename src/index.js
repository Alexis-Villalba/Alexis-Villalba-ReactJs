import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyADsZm6E4nFSuHcStCTfi8DEYOsAbhOi3Y",
  authDomain: "ecomerce-tecno.firebaseapp.com",
  projectId: "ecomerce-tecno",
  storageBucket: "ecomerce-tecno.appspot.com",
  messagingSenderId: "626659070162",
  appId: "1:626659070162:web:d2619f216d50d937719d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
