import { createContext, useReducer } from "react";
import { chatReducer } from "../reducers/chatReducer";

export const ChatContext = createContext();

const initialState = {
  uid: null,
  activeChat: null, // uid of the other user
  users: [], // list of users in the db
  messages: [], // Current chat messages
};

export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);
  return (
    <ChatContext.Provider
      value={{
        chatState,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
