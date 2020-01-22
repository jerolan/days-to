import "animate.css";

import "../styles/index.css";

import App from "next/app";
import React from "react";

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return <Component {...pageProps} key={router.route} />;
  }
}
