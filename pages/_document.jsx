import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="/css/bootstrap.css"/>
        <link rel="stylesheet" href="/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="/css/shapro-icon.css"/>
        <link rel="stylesheet" href="/css/animate.css"/>
        <link rel="stylesheet" href="/css/owl.carousel.min.css"/>
        <link rel="stylesheet" href="/css/owl.theme.default.min.css"/>
        <link rel="stylesheet" href="/css/slick.css"/>
        <link rel="stylesheet" href="/css/lightcase.css"/>
        <link rel="stylesheet" href="/css/preset.css"/>
        <link rel="stylesheet" href="/css/ignore_for_wp.css"/>
        <link rel="stylesheet" href="/css/theme.css"/>
        <link rel="stylesheet" href="/css/responsive.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Montserrat&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Urbanist&display=swap" rel="stylesheet" /> 
      </Head>
      <body>
        
        <Main />
        <NextScript />
        <script src="/js/jquery.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.appear.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/jquery.shuffle.min.js"></script>
        <script src="/js/tweenmax.min.js"></script>
        <script src="/js/slick.js"></script>
        <script src="/js/lightcase.js"></script> 
        <script src="/js/jquery.easing.1.3.js"></script>
        <script src="/js/circle-progress.js"></script>

        <script src="/js/theme.js"></script>
      </body>
    </Html>
  )
};