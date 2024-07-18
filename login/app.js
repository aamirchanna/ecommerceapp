import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


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


document.getElementById("login_btn").addEventListener("click", function(e) {
    e.preventDefault()
    var email =  document.getElementById("user_email").value;
    var password = document.getElementById("user_password").value;
    //For new registration
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Login  successfully!!");
      window.location.href = "/"
    })
    .catch((error) => {
      console.log(errorMessage);
      alert(error);
    });		  		  
});