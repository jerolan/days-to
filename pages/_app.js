import "../styles/index.css";

import React from "react";
import App from "next/app";

import { DateEventProvider } from "../context/DateEventsContext";

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <DateEventProvider>
        <Component {...pageProps} key={router.route} />
      </DateEventProvider>
    );
  }
}
