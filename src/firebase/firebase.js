import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Firebase yapılandırma bilgileri
  // ...
  apiKey: "AIzaSyA2eV-vmRNaev08P2tXk29BAw1xtI2ecU8",
  authDomain: "job-portal-47ecc.firebaseapp.com",
  projectId: "job-portal-47ecc",
  storageBucket: "job-portal-47ecc.appspot.com",
  messagingSenderId: "1065217284545",
  appId: "1:1065217284545:web:647b6fc0e3478c7dca3740",
  measurementId: "G-H7398MP7KP"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Analytics'i etkinleştir (opsiyonel)
const analytics = getAnalytics(app);

// Firestore veritabanı nesnesini al
const db = getFirestore(app);

export { app, analytics, db };

