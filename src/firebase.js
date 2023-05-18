import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyA2eV-vmRNaev08P2tXk29BAw1xtI2ecU8",
  authDomain: "job-portal-47ecc.firebaseapp.com",
  projectId: "job-portal-47ecc",
  storageBucket: "job-portal-47ecc.appspot.com",
  messagingSenderId: "1065217284545",
  appId: "1:1065217284545:web:c05481905965c613ca3740",
  measurementId: "G-0MYFQ4XZBW"
};

// Firebase uygulamasını başlatma
const app = initializeApp(firebaseConfig);

// Firestore referansını al
export const db = getFirestore(app);
