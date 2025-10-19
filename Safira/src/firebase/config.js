import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz9_ZGlS2Q6jIQIOsDASVSLb9s_miev0k",
  authDomain: "safira-90e91.firebaseapp.com",
  projectId: "safira-90e91",
  storageBucket: "safira-90e91.firebasestorage.app",
  messagingSenderId: "790507795667",
  appId: "1:790507795667:web:183209e8f7930e81351026"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };