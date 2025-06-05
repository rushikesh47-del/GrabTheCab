// Import the functions you need from the SDKs you need
import { initializeApp ,initializeAuth } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvI1g82h5TJEasmim5JBB7MM1kFC_LXlY",
  authDomain: "grabthecab-39a73.firebaseapp.com",
  projectId: "grabthecab-39a73",
  storageBucket: "grabthecab-39a73.appspot.com",
  messagingSenderId: "753390812168",
  appId: "1:753390812168:web:b7ab9af2f6f87e68e6a5bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app)
export default app;