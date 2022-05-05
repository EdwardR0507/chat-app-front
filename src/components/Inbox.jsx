import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import ChatRow from "../components/ChatRow";
import { AuthContext } from "../context/AuthContext";

const Inbox = () => {
  const {
    chatState: { users },
  } = useContext(ChatContext);

  const {
    auth: { uid },
  } = useContext(AuthContext);

  return (
    <div className="flex flex-col mt-8 h-1/2">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Active Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
          4
        </span>
      </div>
      <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
        {users
          .filter((user) => user.uid !== uid)
          .map((user) => (
            <ChatRow key={user.uid} user={user} />
          ))}
      </div>
    </div>
  );
};

export default Inbox;
