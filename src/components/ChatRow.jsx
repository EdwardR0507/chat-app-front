import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { types } from "../types/types";

const ChatRow = ({ user }) => {
  const { name, online, uid } = user;

  const {
    chatState: { activeChat },
    dispatch,
  } = useContext(ChatContext);

  const handleClick = () => {
    dispatch({
      type: types.ACTIVATE_CHAT,
      payload: uid,
    });
  };

  return (
    <button
      className={`flex flex-row items-center  justify-between first-line:hover:bg-gray-100 rounded-xl p-2 
      hover:bg-gray-100 ${
        activeChat === uid && "bg-gray-200 hover:bg-gray-200"
      }`}
      onClick={handleClick}
    >
      <div className="flex flex-row items-center">
        <img
          className="flex items-center justify-center h-8 w-8 rounded-full"
          src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
          alt="James Bhatta"
        />

        <p className="ml-2 text-sm font-semibold">{name}</p>
      </div>
      <span className="text-sm tracking-wide flex items-center space-x-1">
        <span className="text-gray-600">{online ? "Online" : "Offline"}</span>
        <svg
          className="h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            fill={online ? "green" : "red"}
            stroke="none"
          ></circle>
        </svg>
      </span>
    </button>
  );
};

export default ChatRow;
