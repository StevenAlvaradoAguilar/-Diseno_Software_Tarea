import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKshEbAa8buOwWw_I2jkmf-8C2TKJnfZU",
  authDomain: "tarea-diseno-de-software-38262.firebaseapp.com",
  projectId: "tarea-diseno-de-software-38262",
  storageBucket: "tarea-diseno-de-software-38262.appspot.com",
  messagingSenderId: "728218865170",
  appId: "1:728218865170:web:2cb94d49d93020486892cb"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;



