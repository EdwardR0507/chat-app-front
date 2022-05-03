import { createContext, useCallback, useState } from "react";

const initialState = {
  uid: null,
  check: true,
  logged: false,
  name: "",
  email: "",
};

export const AuthContext = createContext();

import React from "react";
import { fetchWithoutToken } from "../helpers/fetch";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const response = await fetchWithoutToken(
      "auth/login",
      { email, password },
      "POST"
    );
    if (response.ok) {
      window.localStorage.setItem("token", response.token);
      const { uid, name, email } = response.user;
      setAuth({ uid, check: false, logged: true, name, email });
    }
    return response.ok;
  };

  const logout = () => {};
  const signUp = (name, email, password) => {};
  const verifyToken = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
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
