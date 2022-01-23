import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyD3RxF2VOC1MA9gfEKcVGF7qJt8N8ol6bs",
  authDomain: "new-edwood.firebaseapp.com",
  projectId: "new-edwood",
  storageBucket: "new-edwood.appspot.com",
  messagingSenderId: "349734655577",
  appId: "1:349734655577:web:7d819e8616eb7847518348"
};
// Initialize Firebase
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const auth = firebase.auth();

export { auth };
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();