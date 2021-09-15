import Document, { Html, Head, Main, NextScript } from "next/document";
import Particles_background from "../public/particles/particles-background";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
            rel="stylesheet"
          ></link>
           <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>

        </Head>
        <body className="">
          
          <Main />
          <NextScript />
          
        </body>

      </Html>
    );
  }
}

export default MyDocument;
