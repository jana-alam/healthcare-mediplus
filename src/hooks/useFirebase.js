import firebaseInitialization from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialization();
const useFirebase = () => {
  const auth = getAuth();
  const [patient, setPatient] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // Auth observer
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setPatient(user);
        setIsLoading(false);
      } else {
        setPatient({});
        setIsLoading(false);
      }
    });
  }, []);
  // Google sign in
  const googleSignIn = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  //   sign out
  const logOut = () => {
    signOut(auth);
  };
  return {
    patient,
    setPatient,
    googleSignIn,
    logOut,
    isLoading,
  };
};

export default useFirebase;
