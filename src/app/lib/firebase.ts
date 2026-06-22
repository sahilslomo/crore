import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-CQ6PEYCUip5McM5lPp07GK7vOGaamIc",
  authDomain: "navik-c4443.firebaseapp.com",
  databaseURL: "https://navik-c4443-default-rtdb.firebaseio.com",
  projectId: "navik-c4443",
  storageBucket: "navik-c4443.firebasestorage.app",
  messagingSenderId: "394338096150",
  appId: "1:394338096150:web:2482d814ce430a7d371137",
  measurementId: "G-006YE7FHJZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// 🔥 KEEP USER LOGGED IN AFTER REFRESH
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase persistence enabled");
  })
  .catch((err) => {
    console.error("Persistence error:", err);
  });