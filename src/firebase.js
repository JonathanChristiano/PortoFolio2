// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTryLIJ7xU__EijpWCH7I6FE6KNjmp1Cs",
    authDomain: "portofolio-b909e.firebaseapp.com",
    projectId: "portofolio-b909e",
    storageBucket: "portofolio-b909e.firebasestorage.app",
    messagingSenderId: "337982135109",
    appId: "1:337982135109:web:54a5e368c070f5d5763c2c",
    measurementId: "G-FGV0RZXDKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };