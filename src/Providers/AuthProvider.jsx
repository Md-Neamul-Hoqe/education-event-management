import PropTypes from "prop-types";
import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

/* context create */
export const AuthContext = createContext(null);

/* get auth */
const Auth = getAuth(app);

/* Auth provider component */
const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  /* Google Sign in */
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(Auth, googleProvider);
  };

  /* Register */
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(Auth, email, password)();
  };

  /* Email-Password Sign in */
  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  /* Log out */
  const logOutUser = () => {
    return signOut(Auth);
  };

  /* All Context / global variables */
  const authInfo = {
    user,
    setUser,
    registerUser,
    signInUser,
    signInWithGoogle,
    loader,
    logOutUser,
    error,
    setError,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

/* Prop typing */
AuthProvider.propTypes = {
  children: PropTypes.node,
};

/* export */
export default AuthProvider;
