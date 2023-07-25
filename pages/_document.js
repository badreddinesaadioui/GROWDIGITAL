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
          {/* SEO meta */}
          <meta
            name="description"
            content="Agence de marketing digital à Casablanca, Maroc, offrant des services de développement de site web, design de merchandise, brochure, poster, logo, Google Maps boosting, SEO et ranking sur Google Maps."
          />
          <meta
            name="keywords"
            content="agence marketing digital, Casablanca, Maroc, développement site web, design merchandise, brochure, poster, logo, Google Maps, SEO, ranking Google Maps"
          />
          <meta
            name="geo.region"
            content="MA-CAS" // Use the ISO code for Casablanca, Morocco. "MA" for Morocco and "CAS" for Casablanca.
          />
          <meta
            name="geo.placename"
            content="Casablanca, Morocco" // Replace with the actual city and country information.
          />
          <meta
            name="geo.position"
            content="latitude;longitude" // Replace with the actual latitude and longitude coordinates of Casablanca.
          />
          <meta
            name="ICBM"
            content="latitude, longitude" // Replace with the actual latitude and longitude coordinates of Casablanca.
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

