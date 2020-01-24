import React from "react";

const Button: React.FunctionComponent = ({ children }) => {
  return (
    <button
      type="button"
      className="w-full my-4 bg-gray-300 hover:bg-gray-400 text-gray-800 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
