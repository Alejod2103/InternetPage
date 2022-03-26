import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALXweHwpDnlKBswgVSqTHXQ8mTbGDDj34",
  authDomain: "proyectoautocompl.firebaseapp.com",
  projectId: "proyectoautocompl",
  storageBucket: "proyectoautocompl.appspot.com",
  messagingSenderId: "320021958259",
  appId: "1:320021958259:web:7f36ea7cb80a9c99dc6406",
  measurementId: "G-PTNCDVGTFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore();

export { db };