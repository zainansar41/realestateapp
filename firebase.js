import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDpo-fj0BtYL4INjqDT_f8v9foLpM8kWP8",
    authDomain: "realestateapp-b664f.firebaseapp.com",
    projectId: "realestateapp-b664f",
    storageBucket: "realestateapp-b664f.appspot.com",
    messagingSenderId: "922899746660",
    appId: "1:922899746660:web:b80ddc4cad47829f20b471"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app,auth, provider }