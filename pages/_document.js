import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    let pageProps = {};
    if (Document.getInitialProps) {
      pageProps = await Document.getInitialProps(ctx);
    }

    return { ...pageProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
