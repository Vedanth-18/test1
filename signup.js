// Firebase Configuration (from firebase-config.js)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Yb08DQPCCQYW68h5ladKHrawT3DQhno",
  authDomain: "test-e0cc7.firebaseapp.com",
  databaseURL: "https://test-e0cc7-default-rtdb.firebaseio.com",
  projectId: "test-e0cc7",
  storageBucket: "test-e0cc7.appspot.com",
  messagingSenderId: "710575494210",
  appId: "1:710575494210:web:17b3b731339ce5d6c509db",
  measurementId: "G-6BHDLF9PNX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Sign-up Logic
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = `${name}@gmail.com`;
    const password = document.getElementById("password").value;

    // Create user in Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Store user data in Firebase Realtime Database or Firestore
            // Replace 'users' with your own database reference
            firebase.database().ref('users/' + user.uid).set({
                name: name,
                email: email,
                password: password,
            });

            // Redirect or show a success message
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
});