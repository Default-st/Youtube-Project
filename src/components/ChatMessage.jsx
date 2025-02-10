import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 shadow p-2 rounded-lg">
      <img
        className="h-5 w-5"
        alt="user"
        src="https://yt4.ggpht.com/ytc/AIdro_m8XKHqSWkWTWqWfEqmk_VKzILNNjD_Lzb82OiQOJGQrEQgbhrNF_TgQFrd7LuMlqJAqQ=s32-c-k-c0x00ffffff-no-rj"
      />
      <span className="font-semibold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
