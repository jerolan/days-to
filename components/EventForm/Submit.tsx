import React from "react";

const Field: React.FunctionComponent = ({ children }) => {
  return (
    <button
      className="w-full my-4 bg-gray-300 hover:bg-gray-400 text-gray-800 text-white font-bold py-2 px-4 rounded"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Field;
