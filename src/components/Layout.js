import React from 'react';
import Head from 'next/head';

import ThemeProvider from './ThemeProvider';

export default function App(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <link href="/static/reset.css" rel="stylesheet" />
        <link href="/static/index.css" rel="stylesheet" />
        {/*
          <link rel='manifest' href='/static/manifest.json' />
          <meta name='theme-color' content='#08213D' />
          <link rel='shortcut icon' href='/static/icon.png' />
          <link rel='apple-touch-icon' href='/static/icon.png' />
          <meta name='apple-mobile-web-app-title' content='Upost' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='mobile-web-app-capable' content='yes' />
        */}
      </Head>
      <main>
        <ThemeProvider>
          {props.children}
        </ThemeProvider>
      </main>
    </div>
  );
}
