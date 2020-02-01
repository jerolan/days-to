import React from "react";

const Button: React.FunctionComponent<{ type?: "button" | "submit" }> = ({
  children,
  type
}) => {
  return (
    <button
      type={type}
      className="hover:bg-gray-400 w-full my-4 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button"
};

export default Button;
