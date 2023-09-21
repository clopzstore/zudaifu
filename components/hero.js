import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Hero extends Component {
  render() {
    return (
      <>
        <section
          className="banner-02" 
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner-content-2">
                  <span className="animated">Salep Kulit Banyak Manfaat</span>
                  <h2 className="animated mb-4 mt-4">ZUDAIFU CHY GAO ASLI ORIGINAL</h2>
                  <p className="animated">
                  Zudaifu adalah merek krim atau salep kulit yang diklaim memiliki banyak manfaat untuk berbagai masalah kulit
                  </p>
                  <ul className="animated">
                    <li>
                      <i className="fal fa-check"></i>Mengatasi Jerawat
                    </li>
                    <li>
                      <i className="fal fa-check"></i>Mengatasi Masalah Kulit Kronis
                    </li>
                  </ul>
                  <a className="shapro-btn-2 animated" href="#">
                    <span>Cek Sekarang</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="layer-thumb animated">
                  <img src="/img/produk/1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Hero;
