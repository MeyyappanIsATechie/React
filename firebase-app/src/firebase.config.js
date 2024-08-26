// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8HZJnFLCJ0TnppU5BHk1vaPvDDQDenzc",
  authDomain: "fir-app-1d1c8.firebaseapp.com",
  projectId: "fir-app-1d1c8",
  storageBucket: "fir-app-1d1c8.appspot.com",
  messagingSenderId: "854184095633",
  appId: "1:854184095633:web:7f63960173b20549323430",
  measurementId: "G-55RLD7TQHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;