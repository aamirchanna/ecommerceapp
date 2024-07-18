

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDd9OBtAPMMxQzamsehRmBhF28R1uiaxJ8",
  authDomain: "fir-163c3.firebaseapp.com",
  projectId: "fir-163c3",
  storageBucket: "fir-163c3.appspot.com",
  messagingSenderId: "460130044026",
  appId: "1:460130044026:web:983aad8b0b3e4d723b93c3",
  measurementId: "G-F3G7JK4JP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(app)
export{
  auth
}