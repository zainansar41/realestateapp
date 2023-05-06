import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";

import { auth, provider } from '../firebase'
import { app } from "../firebase";

export async function googleSignin() {
  console.log("googleSignin function called");

  try {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);

    // After redirect, handle sign-in result
    getAuth()
      .getRedirectResult()
      .then((result) => {
        // Handle successful sign-in
        console.log("Sign-in successful:", result.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error("Sign-in error:", error);
      });
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
