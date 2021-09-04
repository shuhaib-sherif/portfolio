
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
        
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument