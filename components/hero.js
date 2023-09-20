import React, { Component } from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from "framer-motion" 

class Hero extends Component {
  
  render() {
    return (
      <>
       <ParallaxBanner
      layers={[{ image: '/img/asset/bg.webp', speed: -15 }]}
      className="paralax"
    >
        <section className="tg-banner-area banner-bg ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
                <div
                  className="tg-banner-img text-center"
                >
                        <motion.div  
                    initial={{  opacity: 0 }}
                    whileInView={{  opacity: 1 }}
                    transition={{ duration: .4, ease: "easeOut", delay: .3 }}
                    viewport={{ once: true }}
                    >
                  <img src="/img/produk/pro.webp" alt="img" />
                  </motion.div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-10">
                <div className="tg-banner-content">
                <motion.div  
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .4, ease: "easeOut", delay: .3 }}
                    viewport={{ once: true }}>
                  <h4 className="sub-title wow fadeInUp" data-wow-delay=".2s">
                    Produk Asli
                  </h4>
              
        
                  <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                    Shampoo Pewarna Rambut Cultusia
                  </h2>
                
                  <p className=" wow fadeInUp" data-wow-delay=".6s">
                    produk perawatan rambut yang berkualitas tinggi untuk
                    memberikan pengalaman pembersihan dan perawatan rambut yang
                    luar biasa.
                  </p>
                 
                  <div className="tg-banner-btn wow" >  
            
                    <a href="https://wa.me/+6285718787490?text=Hallo,%20saya%20ingin%20memesan%20shampoo%20cultusia%20" className="tg-btn">
                      Pesan Sekarang
                    </a>
                 
                  </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ParallaxBanner>
       

      </>
    );
  }
}
export default Hero;
