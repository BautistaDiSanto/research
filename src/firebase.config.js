import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "research-3aea0.firebaseapp.com",
    projectId: "research-3aea0",
    storageBucket: "research-3aea0.appspot.com",
    messagingSenderId: "263738423354",
    appId: process.env.REACT_APP_APP_ID,
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);