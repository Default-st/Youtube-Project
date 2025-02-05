import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Live", "Game", "Cricket", "News", "Cooking", "Soccer"];
  return (
    <div className="flex">
      {list.map((listItem) => (
        <Button key={listItem} name={listItem} />
      ))}
    </div>
  );
};

export default ButtonList;
