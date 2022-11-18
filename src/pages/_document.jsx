import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='nb-NO'>
        <Head>
          {/* Place site verifications and other third party scripts that is not page spesific here */}
          <meta name='google-site-verification' content='5aHIeXmY8Wti2pNASgL7J1HaO3xTJ32B-02WEISNv9U' />
          {/* Place third party fonts here */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap' rel='stylesheet' />
          <link rel='apple-touch-icon' href='/favicon.ico' />
          <link rel='icon' type='image/png' sizes='512x512' href='/favicon.ico' />
        </Head>
        <body>
          {/* Place scripts that is not page spesific here */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
