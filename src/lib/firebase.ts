import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCs-9dBLkht3fFzV0Rz57nJ_uth-LDEeJI",
  authDomain: "resume-doc-data.firebaseapp.com",
  projectId: "resume-doc-data",
  storageBucket: "resume-doc-data.firebasestorage.app",
  messagingSenderId: "1079803875305",
  appId: "1:1079803875305:web:ed24b4cab2bfbe3a108578",
  measurementId: "G-KYPJF1FLGH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
