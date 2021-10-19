import firebaseInitialization from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialization();
const useFirebase = () => {
  const auth = getAuth();
  const [patient, setPatient] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  // create User

  const createUser = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateDisplayName = () => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // emailsign in

  const emailSignIn = () => {
    return signInWithEmailAndPassword(auth, email, password);
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
    setName,
    setEmail,
    setPassword,
    updateDisplayName,
    emailSignIn,
    createUser,
    isLoading,
  };
};

export default useFirebase;
