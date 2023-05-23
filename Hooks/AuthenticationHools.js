import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { auth, provider } from '../firebase'
import { app } from "../firebase";



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
