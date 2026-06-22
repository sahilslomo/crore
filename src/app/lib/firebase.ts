import { initializeApp } from "firebase/app";
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXVFxfT12IXSJHzGAhKpQF18sPmBOMutQ",
    authDomain: "navik-reloaded.firebaseapp.com",
    projectId: "navik-reloaded",
    storageBucket: "navik-reloaded.firebasestorage.app",
    messagingSenderId: "557866754279",
    appId: "1:557866754279:web:491ed0279ca0fc3c428242",
    measurementId: "G-0KJWKY67WE"
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