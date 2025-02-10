import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useLiveChatStore } from "../utils/store";
import { generateRandomName, makeid } from "../utils/helper";

const LiveChat = () => {
  const { liveChatData, setLiveChatData } = useLiveChatStore();
  const [newMessage, setNewMessage] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLiveChatData({ name: "satya", message: newMessage });
    setNewMessage("");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveChatData({
        name: generateRandomName(),
        message: makeid(20),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-slate-100 gap-y-3 rounded-lg w-full h-[600px] overflow-y-scroll mx-2 p-2 border border-black  flex flex-col-reverse">
        {liveChatData.length > 0
          ? liveChatData.map((chatMessage, idx) => (
              <ChatMessage
                key={idx}
                name={chatMessage.name}
                message={chatMessage.message}
              />
            ))
          : null}
      </div>{" "}
      <form
        className=" h-[100px] w-full text-center "
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border border-black p-2 m-2 w-full rounded-lg"
        />
        <button
          className=" border bg-gray-200 p-2 w-1/3 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
