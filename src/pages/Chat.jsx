import Avatar from "../components/Avatar";
import ChatContent from "../components/ChatContent";
import ChatSelect from "../components/ChatSelect";
import Inbox from "../components/Inbox";

const Chat = () => {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <Avatar />
          <Inbox />
        </div>
        {/* <ChatContent /> */}
        <ChatSelect />
      </div>
    </div>
  );
};

export default Chat;