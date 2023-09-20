import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/css/font.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer strategy="lazyOnload"/>
      </Head>
      <body>
      <div 
       className="elfsight-app-eb63cfe2-444f-4aa1-b32d-0a297e3186fe"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};