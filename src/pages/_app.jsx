import '@/assets/css/globals.css'
import '@/assets/css/utilities.css'

import "bootstrap/dist/css/bootstrap.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react'

import Head from 'next/head'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap")
  });

  return (
    <>
      <Head>
        <title>abyditya &mdash; Freelance Developer</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A Massive Development Course Platform For Everyone!" />
        <meta name="author" content="abyditya" />
        <meta name="robots" content="index, follow" />

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.3.0/css/all.css" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abyditya.space/" />
        <meta property="og:title" content="abyditya" />
        <meta property="og:site_name" content="abyditya • Freelance Designer" />
        <meta property="og:description" content="I'm Abyditya, A Website developer. I love to create something simple and clean." />
        <meta property="og:image" content="assets/img/meta-image.jpg" />

        <meta property="twitter:url" content="https://abyditya.space/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="abyditya • Freelance Designer" />
        <meta property="twitter:description" content="I'm Abyditya, A Website developer. I love to create something simple and clean." />
        <meta property="twitter:image" content="assets/img/meta-image.jpg" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}
