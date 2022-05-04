import { useCallback, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
export const useSocket = (serverPath) => {
  //   const socket = useMemo(
  //     () =>
  //       io(serverPath, {
  //         transports: ["websocket"],
  //       }),
  //     [serverPath]
  //   );
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState(false);

  const connectSocket = useCallback(() => {
    const token = window.localStorage.getItem("token");

    const socketTemp = io(serverPath, {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
      query: {
        token,
      },
    });
    setSocket(socketTemp);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
    setSocket(null);
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);
  return {
    online,
    socket,
    connectSocket,
    disconnectSocket,
  };
};
