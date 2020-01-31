import React from "react";

const Button: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <button type="button" className="hover:bg-gray-400 w-full my-4 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
        {children}
      </button>
    </>
  );
};

export default Button;
