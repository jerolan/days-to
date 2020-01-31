import React from "react";
import Head from "next/head";

import Constants from "../config/constants";

const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <title>{Constants.APP_NAME}</title>
      </Head>
      <main className="container mx-auto px-4">{children}</main>
    </>
  );
};

export default MainLayout;
