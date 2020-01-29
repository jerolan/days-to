import "../styles/index.css";

import React from "react";
import App from "next/app";
import * as Sentry from "@sentry/node";

import { DateEventProvider } from "../context/DateEventsContext";

Sentry.init({ dsn: process.env.SENTRY_DNS });

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
