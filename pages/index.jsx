import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import dynamic from 'next/dynamic';
import { NextSeo } from "next-seo";
import { ParallaxProvider } from 'react-scroll-parallax';
const Headcom = dynamic(() => import('../components/header'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
const Popuo = dynamic(() => import('../components/popup'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
const Herosection = dynamic(() => import('../components/hero'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
const Aboutsection = dynamic(() => import('../components/about'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
const Videosection = dynamic(() => import('../components/video'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
}); 
const Faqsection = dynamic(() => import('../components/faq'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
}); 
const Testisection = dynamic(() => import('../components/testimoni'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
const Foot = dynamic(() => import('../components/footer'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
  export default class Index extends React.Component {
    render() {
      return (
        <>
          <NextSeo
            title="Zudaifu - SALEP OBAT UNTUK ALERGI"
            description="ZUDAIFU SALEP OBAT UNTUK ALERGI GATAL JAMURAN JERAWAT."
            canonical="https://zudaifu.clopz.store/"
            openGraph={{
              url: "https://zudaifu.clopz.store/",
              title: "Zudaifu - SALEP OBAT UNTUK ALERGI",
              description: "ZUDAIFU SALEP OBAT UNTUK ALERGI GATAL JAMURAN JERAWAT.",
              images: [
                {
                  url: "https://zudaifu.clopz.store/img/asset/fb.jpeg",
                  width: 600,
                  height: 315,
                  alt: "clopz store | zudaifu",
                },
              ],
              site_name: "clopz store | zudaifu",
            }}
          />
          <Headcom />
          <main>
            <ParallaxProvider>
            <Herosection />
            </ParallaxProvider>
            <Aboutsection />
            <Videosection />
            <Faqsection />
            <ParallaxProvider>
            <Testisection />
            </ParallaxProvider>          
          </main> 
          <Foot />
        </>
      );
    };
  };