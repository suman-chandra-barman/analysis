// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBss8REWLAgLUJ7mixQ9vWN7ucGAiYoVHA',
  authDomain: 'expensesanalyzer.firebaseapp.com',
  projectId: 'expensesanalyzer',
  storageBucket: 'expensesanalyzer.appspot.com',
  messagingSenderId: '89375846701',
  appId: '1:89375846701:web:ba2dccd52e51c867b5e3a4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
