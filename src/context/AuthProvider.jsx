import { createContext, useEffect, useState } from "react";
import { getInitialState } from "../services/localStorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
