import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";

const firebaseConfig={
    apiKey: "AIzaSyA5IScS6s53BKlZtxhjjMQqFEuR3QEqN14",
    authDomain: "casa-development-1aae3.firebaseapp.com",
    projectId: "casa-development-1aae3",
    storageBucket: "casa-development-1aae3.appspot.com",
    messagingSenderId: "470548911783",
    appId: "1:470548911783:web:f0db1251ca6c1bd3c02d82"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
