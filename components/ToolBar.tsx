import React from "react";

export const ToolBarItem: React.FunctionComponent<React.HTMLProps<
  HTMLDivElement
>> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="font-medium text-right cursor-pointer">
      {children}
    </div>
  );
};

const ToolBar: React.FunctionComponent = ({ children }) => {
  return <div className="py-6">{children}</div>;
};

export default ToolBar;
