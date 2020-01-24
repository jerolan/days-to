import React from "react";
import Head from "next/head";

const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <title>Days To</title>
      </Head>
      <main className="container mx-auto px-4">{children}</main>
    </>
  );
};

export default MainLayout;
