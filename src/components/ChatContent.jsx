import IncomingMessage from "./IncomingMessage";
import TextBar from "./TextBar";
import OutgoingMessage from "./OutgoingMessage";
import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const ChatContent = () => {
  const { auth } = useContext(AuthContext);
  const {
    chatState: { messages },
  } = useContext(ChatContext);

  // This ref is used to scroll to the bottom of the chat
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  return (
    <section className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            {messages.length > 0 ? (
              <div className="grid grid-cols-12 gap-y-2" id="msgs">
                {messages.map((message) =>
                  message.from === auth.uid ? (
                    <OutgoingMessage key={message._id} msg={message} />
                  ) : (
                    <IncomingMessage key={message._id} msg={message} />
                  )
                )}
                <div ref={endRef}></div>
              </div>
            ) : (
              <div className="flex flex-col h-full justify-center  items-center">
                <span className="font-bold text-2xl text-gray-800">
                  Start a conversation by typing a message...
                </span>
              </div>
            )}
          </div>
        </div>

        <TextBar />
      </div>
    </section>
  );
};

export default ChatContent;
