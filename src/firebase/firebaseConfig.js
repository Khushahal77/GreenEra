// ----------------------------------------------------
//  Firebase Config + Auth Functions (Working Version)
// ----------------------------------------------------

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// ----------------------------------------------------
// 1️⃣ Your Firebase Configuration
// ----------------------------------------------------
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// ----------------------------------------------------
// 2️⃣ Initialize Firebase
// ----------------------------------------------------
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ----------------------------------------------------
// 3️⃣ Email/Password Login
// ----------------------------------------------------
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// ----------------------------------------------------
// 4️⃣ Email/Password Registration
// ----------------------------------------------------
export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Backwards-compatible alias: some pages import `signupWithEmail`
export const signupWithEmail = registerWithEmail;

// ----------------------------------------------------
// 5️⃣ Google Login
// ----------------------------------------------------
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

// ----------------------------------------------------
// 6️⃣ Logout
// ----------------------------------------------------
export const logout = () => {
  return signOut(auth);
};
