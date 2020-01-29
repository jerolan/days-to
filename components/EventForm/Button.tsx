import React from "react";

const Button: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <button type="button" className="Button">
        {children}
      </button>
    </>
  );
};

export default Button;
