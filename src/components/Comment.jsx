import React from "react";
import CommentsList from "./CommentsList";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex bg-gray-100 p-2 rounded-lg my-2">
      <img
        alt="user"
        className="w-8 h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="text-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
