// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwIlQNi0rAtO3K85we9X_lG1ZY-Eega6I",
  authDomain: "realchi-9ea8b.firebaseapp.com",
  projectId: "realchi-9ea8b",
  storageBucket: "realchi-9ea8b.firebasestorage.app",
  messagingSenderId: "1087540568116",
  appId: "1:1087540568116:web:fbeb29d4930f5d2f00aa61"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };