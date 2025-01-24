import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn0Ig1cjEV_DkOcEVdDjArpxA3lc1W2k0",
  authDomain: "recisto-89e8a.firebaseapp.com",
  projectId: "recisto-89e8a",
  storageBucket: "recisto-89e8a.firebasestorage.app",
  messagingSenderId: "911296742813",
  appId: "1:911296742813:web:2ca13cac444e6b6e799b74",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
