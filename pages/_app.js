import "animate.css";

import "../styles/index.css";

import React from "react";
import App from "next/app";

import { DateEventProvider } from "../dateEvents/DateEventsContext";

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
