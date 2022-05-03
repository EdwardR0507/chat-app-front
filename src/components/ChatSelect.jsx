import React from "react";

const ChatSelect = () => {
  return (
    <section className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex h-full justify-center  items-center">
            <span className="font-bold text-2xl text-gray-800">
              Please select a chat to start chatting with.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSelect;
