import "../styles/index.css";

import React from "react";
import App from "next/app";

import { DateEventProvider } from "../context/DateEventsContext";
import { initNotifyer } from "../lib/errorNotifyer";

initNotifyer();

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    // Workaround for https://github.com/zeit/next.js/issues/8592
    const { err } = this.props;
    const modifiedPageProps = { ...pageProps, err };

    return (
      <DateEventProvider>
        <Component {...modifiedPageProps} />
      </DateEventProvider>
    );
  }
}
