import { createContext, useCallback, useContext, useState } from "react";
import { fetchToken, fetchWithoutToken } from "../helpers/fetch";
import { ChatContext } from "./ChatContext";
import { types } from "../types/types";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  check: true,
  logged: false,
  name: "",
  email: "",
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  const { dispatch } = useContext(ChatContext);

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

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch({ type: types.LOGOUT });
    setAuth({
      check: false,
      logged: false,
    });
  };

  const signUp = async (name, email, password) => {
    const response = await fetchWithoutToken(
      "auth/new",
      { name, email, password },
      "POST"
    );
    if (response.ok) {
      const { uid, name, email } = response.user;
      setAuth({ uid, check: false, logged: false, name, email });
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
