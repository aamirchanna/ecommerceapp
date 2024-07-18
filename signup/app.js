import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
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



document.getElementById("signup_btn").addEventListener("click", function(e) {
    e.preventDefault()
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      document.getElementById('email').value = "";
      document.getElementById('password').value = "";
      window.location.href = "/login/index.html"
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });		  		  
});