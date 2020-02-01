import React from "react";
import Head from "next/head";

import Constants from "../config/constants";

const MainLayout: React.FunctionComponent<{ title?: string }> = ({
  children,
  title = Constants.APP_NAME
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container mx-auto px-4">{children}</div>
    </>
  );
};

export default MainLayout;
