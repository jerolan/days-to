import React from 'react';
import Head from 'next/head';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
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
      <main
        style={{ display: 'flex', height: '100vh', maxWidth: '100vw' }}
      >
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <ThemeProvider>{props.children}</ThemeProvider>
        </MuiPickersUtilsProvider>
      </main>
    </div>
  );
}
