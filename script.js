  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
 
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA2ppCOqLrrpmV0S1x0VThHskIeX4hifj0",
    authDomain: "exemple-23df6.firebaseapp.com",
    projectId: "exemple-23df6",
    storageBucket: "exemple-23df6.appspot.com",
    messagingSenderId: "336572750976",
    appId: "1:336572750976:web:a8a39fed5487103acf5a65"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getDatabase(app);


  document.getElementById("")