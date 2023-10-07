// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlzX75bNOZyCPaM8gCk7Qj5mreT9-1Ouw",
  authDomain: "event-management-753d1.firebaseapp.com",
  projectId: "event-management-753d1",
  storageBucket: "event-management-753d1.appspot.com",
  messagingSenderId: "935070308403",
  appId: "1:935070308403:web:a98ee80414e9047328ab46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;