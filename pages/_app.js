import "../styles/index.css";

import React from "react";
import App from "next/app";

import { DateEventProvider } from "../context/DateEventsContext";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <DateEventProvider>
        <Component {...pageProps} />
      </DateEventProvider>
    );
  }
}
