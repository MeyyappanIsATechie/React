import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./firebase.config";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const navigate = useNavigate();

  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerWithFirebase = () => {
    // e.preventDefault();
    setLoading(true);
    const { password, ...safe } = registerFormData;
    // console.log("form submitted", safe);
    return createUserWithEmailAndPassword(auth, safe.email, password);
  };

  const loginWithFirebase = () => {
    //e.preventDefault();
    setLoading(true);
    return signInWithEmailAndPassword(
      auth,
      loginFormData.email,
      loginFormData.password
    );
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state
      navigate("register");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  const handleLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      checkAuth();
    };
  }, []);

  useEffect(() => {
    if (user) navigate("/profile");
  }, [user]);

  // console.log(user);

  if (loading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        registerWithFirebase,
        loginWithFirebase,
        loginFormData,
        setLoginFormData,
        loading,
        setLoading,
        user,
        signOutUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
