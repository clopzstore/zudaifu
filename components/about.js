import React, { Component } from "react"; 
class About extends Component {
  render() {
    return (
      <>
        <section id="ingredient" className="tg-supplement-area pt-130 pb-120">
          <div className="fp-shapes-wrap">
            <div className="fp-shape-one">
              <img
                src="/img/asset/f_img1.png"
                alt="shape"
                className="paroller"
              />
            </div>
            <div className="fp-shape-two">
              <img
                src="/img/asset/f_img2.png"
                alt="shape"
                className="paroller"
              />
            </div>
          </div>
          <div className="fp-circle one"></div>
          <div className="tg-supplement-bg"></div>
          <div className="container">
            <div className="tg-supplement-inner">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 order-2 order-lg-1 position-relative">
                  <div
                    className="tg-supplement-img text-end  wow fadeInRight"
                    data-wow-delay=".2s"
                  >
                    <img src="/img/asset/dg.webp" alt="produk" />
                  </div>
                  <div className="tg-supplement-shape">
                    <img
                      src="/img/asset/r_shape.png"
                      alt=""
                      className="rotateme"
                    />
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center text-lg-start align-items-center justify-content-center d-flex">
                  <div
                    className="tg-supplement-content mt-60 wow fadeInLeft"
                    data-wow-delay=".2s"
                  >
                    <div className="tg-section-title mb-4">
                      <span className="sub-title">
                        KELEBIHAN PRODUK CULTUSIA
                      </span>
                      <h2 className="title">
                        Bebas Pengunaan Bahan Bahan Berbahaya
                      </h2>
                    </div>
                    <p>
                      Produk ini didesain dengan menghindari penggunaan amonia
                      dan bahan kimia berbahaya lainnya yang sering terkandung
                      dalam pewarna rambut konvensional. Ini membantu menjaga
                      kesehatan rambut dan kulit kepala.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tg-supplement-inner mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-6 order-1 order-lg-1 text-center text-lg-start align-items-center justify-content-center d-flex">
                  <div
                    className="tg-supplement-content mt-60 wow fadeInLeft"
                    data-wow-delay=".2s"
                  >
                    <div className="tg-section-title mb-4">
                      <span className="sub-title">FOKUS PRODUK CULTUSIA</span>
                      <h2 className="title">
                        Formula Perawatan Rambut Terbaik
                      </h2>
                    </div>
                    <p>
                      Shampoo Cultusia Pewarna Rambut tidak hanya memberikan
                      warna, tetapi juga mengandung nutrisi yang membantu
                      merawat rambut. Ini bisa termasuk vitamin, protein, dan
                      bahan alami lainnya yang membantu menjaga kelembapan,
                      kekuatan, dan keindahan rambut.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 order-2 order-lg-2 position-relative">
                  <div
                    className="tg-supplement-img text-end  wow fadeInRight"
                    data-wow-delay=".2s"
                  >
                    <img src="/img/produk/pro1.webp" alt="produk" />
                  </div>
                  <div className="tg-supplement-shape">
                    <img
                      src="/img/asset/r_shape.png"
                      alt=""
                      className="rotateme"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fp-circle four"></div>
        </section>
      </>
    );
  }
}
export default About;
