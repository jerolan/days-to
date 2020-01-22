import React from "react";

const MainLayout: React.FunctionComponent = ({ children }) => {
  return <main className="container mx-auto px-4">{children}</main>;
};

export default MainLayout;
