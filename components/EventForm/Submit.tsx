import React from "react";

const Field: React.FunctionComponent = ({ children }) => {
  return (
    <div className="w-full">
      <button
        className="my-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-800 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Field;
