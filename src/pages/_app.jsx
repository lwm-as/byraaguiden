import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>byråguiden</title>
      <meta name='description' content='byråguiden' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
      {/* Place site verifications and other third party scripts that is page spesific here */}
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
