import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import products from './mocks/products.json';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBwgJ2PKqAfzpS0Sn6yWO3ygUm6KRSp3A8",
  authDomain: "proyectorjs2.firebaseapp.com",
  projectId: "proyectorjs2",
  storageBucket: "proyectorjs2.appspot.com",
  messagingSenderId: "1035629682874",
  appId: "1:1035629682874:web:a4563eb06281040f3e6283",
  measurementId: "G-5L9LYSGVR3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// products.forEach((product) => {
//   addDoc(collection(db, 'products'), product)
//     .then((docRef) => {
//       console.log('documento agregado con id:', docRef.id);
//     })
//     .catch((error) => {
//       console.error("error al agregar documento", error);
//     });
// });

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



