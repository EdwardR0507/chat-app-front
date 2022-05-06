import { createContext, useContext, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { ChatContext } from "./ChatContext";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    import.meta.env.VITE_SOCKET_URL
  );
  const { auth } = useContext(AuthContext);

  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  // Listen for all users in the db
  useEffect(() => {
    socket?.on("users-list", (users) => {
      dispatch({ type: types.LOAD_USERS, payload: users });
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("message", (message) => {
      dispatch({ type: types.NEW_MESSAGE, payload: message });
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        online,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
