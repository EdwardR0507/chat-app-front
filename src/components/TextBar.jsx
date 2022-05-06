import { useContext, useState } from "react";
import InputEmoji from "react-input-emoji";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { SocketContext } from "../context/SocketContext";

const InputBar = () => {
  const [message, setMessage] = useState("");
  const { socket } = useContext(SocketContext);
  const {
    auth: { uid },
  } = useContext(AuthContext);
  const {
    chatState: { activeChat },
  } = useContext(ChatContext);

  const handleEmit = () => {
    socket.emit("message", {
      from: uid,
      to: activeChat,
      message,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length === 0) {
      return;
    }
    handleEmit();
    console.log(message);
  };

  return (
    <form
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
      onSubmit={handleSubmit}
    >
      <div>
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <InputEmoji
            value={message}
            onChange={setMessage}
            theme="light"
            onEnter={handleEmit}
            cleanOnEnter
            placeholder="Type a message"
          />
        </div>
      </div>
      <div className="ml-4">
        <button
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
          type="submit"
        >
          <span>Send</span>
          <span className="ml-2">
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default InputBar;
