import { useContext } from "react";
import Avatar from "../components/Avatar";
import ChatContent from "../components/ChatContent";
import ChatSelect from "../components/ChatSelect";
import Inbox from "../components/Inbox";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const {
    chatState: { activeChat },
  } = useContext(ChatContext);

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-6 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <Avatar />
          <Inbox />
        </div>
        {activeChat ? <ChatContent /> : <ChatSelect />}
      </div>
    </div>
  );
};

export default Chat;
