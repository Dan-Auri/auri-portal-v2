import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYjjf11KU3YkzSGiplmol7cj43WIPQdbQ",
  authDomain: "auri-portal.firebaseapp.com",
  projectId: "auri-portal",
  storageBucket: "auri-portal.appspot.com", // ✅ Corrected here
  messagingSenderId: "690881339888",
  appId: "1:690881339888:web:8edecec68d61fc43ebfd35"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
