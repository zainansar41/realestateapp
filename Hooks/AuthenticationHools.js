import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

import { auth, provider } from '../firebase'
import { app } from "../firebase";

export async function googleSignin() {
    console.log("googleSignin function called");
  
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
  
      const result = await signInWithPopup(auth, provider);
      console.log("error");

      const user = result.user;
  
      console.log("Google sign-in successful:", user);
      return user.uid;
    } catch (error) {
      console.log("Google sign-in error:", error);
      return null;
    }
  }

  
  
  
  
  
  

export async function loginEmail(email, password) {
    console.log("in email login");
    console.log(email, password);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user.uid;
        console.log("Email sign-in successful:", user);
        return user;
    } catch (error) {
        console.log("Email sign-in error:", error);
        return null;
    }
}
