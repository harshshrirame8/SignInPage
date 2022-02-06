import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyCReQPvmb23IBel0mitynpXwHrc9b2fhio",
    authDomain: "user-signin-production.firebaseapp.com",
    projectId: "user-signin-production",
    storageBucket: "user-signin-production.appspot.com",
    messagingSenderId: "434902857595",
    appId: "1:434902857595:web:e3455074305e313a80afde"
  };

  const fb = initializeApp(firebaseConfig);
export const auth = getAuth(fb);