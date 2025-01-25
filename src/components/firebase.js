import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0ODdUq9X3adZmPF4rUgUMVoKXCMpGX9E",
    authDomain: "mysite-73c4e.firebaseapp.com",
    databaseURL: "https://mysite-73c4e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mysite-73c4e",
    storageBucket: "mysite-73c4e.appspot.com",
    messagingSenderId: "777126681223",
    appId: "1:777126681223:web:ee88a4245914851b2c3622",
    measurementId: "G-FB0S79CHN1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };



