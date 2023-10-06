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

export const AuthContext = createContext(null);

const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(Auth, googleProvider);
  };

  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(Auth, email, password)();
  };

  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const logOutUser = () => {
    return signOut(Auth);
  };
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

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
