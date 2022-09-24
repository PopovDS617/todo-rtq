import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { todoApi } from '../store/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ApiProvider api={todoApi}>
        <Component {...pageProps} />
      </ApiProvider>
    </>
  );
}

export default MyApp;
