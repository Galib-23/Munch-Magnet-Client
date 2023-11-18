// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuDmlVBoRRhQ2zhk8foFofs6qVdVJ_xFU",
  authDomain: "munch-magnet.firebaseapp.com",
  projectId: "munch-magnet",
  storageBucket: "munch-magnet.appspot.com",
  messagingSenderId: "679193618809",
  appId: "1:679193618809:web:86b20f23bcc663bbb9a7a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;