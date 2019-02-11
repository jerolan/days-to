import React from 'react'
import Head from 'next/head'

export default function App ({ title, description, image, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <link href='/static/reset.css' rel='stylesheet' />
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
      <main>{children}</main>
    </div>
  )
}
