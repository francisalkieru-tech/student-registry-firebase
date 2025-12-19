import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSk7U_NiK1XwmSIXd_duSJPZ69Ag9Q_c",
  authDomain: "final-project-b68c0.firebaseapp.com",
  projectId: "final-project-b68c0",
  storageBucket: "final-project-b68c0.firebasestorage.app",
  messagingSenderId: "334365642364",
  appId: "1:334365642364:web:04685bc1a8df19d98603f9",
  measurementId: "G-PK1SNB7CG1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);