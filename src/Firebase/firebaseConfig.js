import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2ccxN0CFVI8vSU4UVX-Gva_ELJCM7bxs",
    authDomain: "monitories-9a434.firebaseapp.com",
    projectId: "monitories-9a434",
    storageBucket: "monitories-9a434.appspot.com",
    messagingSenderId: "548784002506",
    appId: "1:548784002506:web:df57da480fbb14d53c2b33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const dataBase = getFirestore()

export { app, google, facebook, dataBase }

//Para hacer el deploy:
// firebase login
// firebase init
// firebase deploy