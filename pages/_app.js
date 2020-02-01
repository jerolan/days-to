import "../styles/index.css";

import React from "react";
import App from "next/app";

import { DateEventProvider } from "../context/DateEventsContext";
import { initNotifier } from "../lib/errorNotifier";

initNotifier();

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
