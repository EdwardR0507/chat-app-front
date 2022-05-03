import ChatRow from "../components/ChatRow";

const Inbox = () => {
  return (
    <div className="flex flex-col mt-8 h-3/5">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Active Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
          4
        </span>
      </div>
      <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
        <ChatRow />
        <ChatRow />
        <ChatRow />
        <ChatRow />
      </div>
    </div>
  );
};

export default Inbox;
