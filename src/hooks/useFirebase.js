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
  // Auth observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setPatient(user);
      } else {
        setPatient({});
      }
    });
  }, []);
  // Google sign in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setPatient(res.user);
      })
      .catch((error) => console.log(error.message));
  };
  //   sign out
  const logOut = () => {
    signOut(auth);
  };
  return {
    patient,
    googleSignIn,
    logOut,
  };
};

export default useFirebase;
