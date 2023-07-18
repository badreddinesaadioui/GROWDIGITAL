import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* favicon */}
          <link
            rel="shortcut icon"
            type="image/svg+xml" // Update the type to "image/svg+xml" for SVG favicon
            href="public/images/banana.svg" // Make sure to provide the correct path to the banana.svg file
          />
          {/* theme meta */}
          <meta name="theme-name" content="next-boilerplate" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fff"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#000"
          />
        </Head>
        <body>
          <Main />
          {/* <TwSizeIndicator /> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
