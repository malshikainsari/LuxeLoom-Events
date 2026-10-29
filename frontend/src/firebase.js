import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARkXRxKG4_Z9VZob-7sKiJ8ynF3pXyUok",
  authDomain: "luxeloom-events.firebaseapp.com",
  projectId: "luxeloom-events",
  storageBucket: "luxeloom-events.firebasestorage.app",
  messagingSenderId: "1028789960512",
  appId: "1:1028789960512:web:a4bf0b5c81d001307904a5",
  measurementId: "G-VXJCTY1W69"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
