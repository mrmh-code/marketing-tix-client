// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6td3msMpBWF2U0NqiVN7KialfCnoiS1Y",
  authDomain: "marketing-tix.firebaseapp.com",
  projectId: "marketing-tix",
  storageBucket: "marketing-tix.appspot.com",
  messagingSenderId: "619461856071",
  appId: "1:619461856071:web:0b8541c2193ee70ef71a62",
  measurementId: "G-EPS6BXHY6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;