import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkdqH8Q-FALLm8gARR98EmPSJfnPf7Epc",
  authDomain: "proyecto-coffee.firebaseapp.com",
  projectId: "proyecto-coffee",
  storageBucket: "proyecto-coffee.appspot.com",
  messagingSenderId: "1054006146022",
  appId: "1:1054006146022:web:dc27cbdc258decd7459c27",
  measurementId: "G-B81XV0PXXM"
};

const appFirebase = initializeApp(firebaseConfig);

export default appFirebase