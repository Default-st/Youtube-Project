import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="m-2 py-2 px-5 bg-gray-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
