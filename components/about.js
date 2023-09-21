import React, { Component } from "react"; 
class About extends Component {
  render() {
    return (
      <>
                <section className="feature-section-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center ">
                        <div className="sub-title sub-color-2">Keunggulan salep zudaifu</div>
                        <h2 className="sec-title">
                           Beberapa Khasiat Pemakaian Salep Secara Rutin
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="feaure-item-3">
                            <div className="f-thumb">
                                <img src="/img/asset/2a.png" alt="" />
                            </div>
                            <h4><a href="single-service.html"> Masalah Kulit Kronis</a></h4>
                            <p>
                            Produk ini sering dipasarkan sebagai solusi untuk masalah kulit kronis seperti eksim dan psoriasis.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feaure-item-3">
                            <div className="f-thumb">
                            <img src="/img/asset/3a.png" alt="" />
                            </div>
                            <h4><a href="single-service.html">Mengurangi Peradangan</a></h4>
                            <p>
                            Krim ini diklaim memiliki sifat anti-inflamasi yang dapat membantu meredakan peradangan pada kulit. 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="feaure-item-3">
                            <div className="f-thumb">
                            <img src="/img/asset/1a.png" alt="" />
                            </div>
                            <h4><a href="single-service.html">Mengurangi Gatal-Gatal</a></h4>
                            <p>
                            Produk ini sering diiklankan sebagai krim yang dapat membantu mengurangi rasa gatal pada kulit.
                            </p>
                        </div>
                    </div>
                </div>
           
            </div>
        </section>
      </>
    );
  }
}
export default About;
