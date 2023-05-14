// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBroVv3xFzU0p27Du_QKjVAwZKcViKJbD8",
    authDomain: "car-doctor-947eb.firebaseapp.com",
    projectId: "car-doctor-947eb",
    storageBucket: "car-doctor-947eb.appspot.com",
    messagingSenderId: "589617507155",
    appId: "1:589617507155:web:a39c8be6add80fbbaa0fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;