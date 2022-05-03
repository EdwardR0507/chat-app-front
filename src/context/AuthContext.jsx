import { createContext, useCallback, useState } from "react";

const initialState = {
  uid: null,
  check: false,
  logged: false,
  name: "",
  email: "",
};

export const AuthContext = createContext();

import React from "react";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  const login = (email, password) => {};
  const logout = () => {};
  const signUp = (name, email, password) => {};
  const verifyToken = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        signUp,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
