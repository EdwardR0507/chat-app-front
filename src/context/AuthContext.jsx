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
import { fetchToken, fetchWithoutToken } from "../helpers/fetch";

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
    return response;
  };

  const logout = () => {};

  const signUp = async (name, email, password) => {
    const response = await fetchWithoutToken(
      "auth/new",
      { name, email, password },
      "POST"
    );
    if (response.ok) {
      const { uid, name, email } = response.user;
      setAuth({ uid, check: false, logged: true, name, email });
    }
    return response;
  };

  const verifyToken = useCallback(async () => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      setAuth({
        uid: null,
        check: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }
    const response = await fetchToken("auth/revalidation");
    if (response.ok) {
      window.localStorage.setItem("token", response.token);
      const { uid, name, email } = response.user;
      setAuth({ uid, check: false, logged: true, name, email });
      return true;
    } else {
      setAuth({
        uid: null,
        check: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }
  }, []);

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
