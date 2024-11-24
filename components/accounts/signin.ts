import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";


export const HandleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('User signed in:', result.user);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An error occurred while signing in:', err);
    }
  }
};

