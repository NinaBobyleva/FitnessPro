import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA3JspQhSXvhmqGN-4a7nxWMpU1pc2Iq8A",
  authDomain: "skyfitnessproone.firebaseapp.com",
  databaseURL:
    "https://skyfitnessproone-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skyfitnessproone",
  storageBucket: "skyfitnessproone.firebasestorage.app",
  messagingSenderId: "857011686778",
  appId: "1:857011686778:web:8e4d2e79e85f1bd8f4dac3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);
// DataBase

export { auth, db, app };
