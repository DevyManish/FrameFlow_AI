// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvcaTzSHHQiy7TMYPpg77XGKUXfL4JlBM",
    authDomain: "hackarthon-b3435.firebaseapp.com",
    databaseURL: "https://hackarthon-b3435-default-rtdb.firebaseio.com",
    projectId: "hackarthon-b3435",
    storageBucket: "hackarthon-b3435.appspot.com",
    messagingSenderId: "186499995596",
    appId: "1:186499995596:web:babe986f8b497deda7ef69",
    measurementId: "G-2H5Q4FW9S4"
  };


const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage;