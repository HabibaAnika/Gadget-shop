import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);
function AuthProvider({ children }) {
  // state for viweing user info
  const [user, setUser] = useState(null);

  // loading
  const [loading, setLoading] = useState(true);

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false);
      if (currentUser) {
        axios
          .post("http://localhost:4000/authentication", { email: currentUser.email })
          .then((data) => {
            if (data?.data?.token) {
              localStorage.setItem("access-token", data.data.token);
              setLoading(false);
            } else {
              localStorage.removeItem("access-token");
              setLoading(false);
            }
          })
          .catch((error) => {
            console.error("Error authenticating:", error);
            localStorage.removeItem("access-token");
            setLoading(false);
          });
      }      
    });
    return () => {
      return unsbscribe;
    };
  }, []);
  // contexts that we are access from other components
  const authInfo = {
    CreateUser,
    Login,
    Logout,
    GoogleLogin,
    user,
    loading,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
