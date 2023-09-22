import React, { Component } from "react";
import Fancybox from "../utilities/Fancybox";

class Detail extends Component {
  render() {
    return (
      <>
        <section className="tg-features-area">
          <div className="container">
            <div className="row ">
                <div className="col-lg-12 d-flex justify-content-center mt-4">
                    <div className="img-wrap">
                    <Fancybox
                        options={{
                          Carousel: {
                            infinite: false,
                          },
                        }}
                      >
                        <a 
                    href="/img/asset/1.jpeg"
                    data-fancybox
                    className="popup-image ripple-white"
                  >
                        <img src="/img/asset/1.jpeg" alt="sertifikat" />
                        </a>
                        </Fancybox>
                    </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-center mt-4">
                    <div className="img-wrap">
                    <Fancybox
                        options={{
                          Carousel: {
                            infinite: false,
                          },
                        }}
                      >
                        <a 
                    href="/img/asset/2.jpeg"
                    data-fancybox
                    className="popup-image ripple-white"
                  >
                        <img src="/img/asset/2.jpeg" alt="sertifikat" />
                        </a>
                        </Fancybox>
                    </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-center mt-4">
                    <div className="img-wrap">
                    <Fancybox
                        options={{
                          Carousel: {
                            infinite: false,
                          },
                        }}
                      >
                        <a 
                    href="/img/asset/3.jpeg"
                    data-fancybox
                    className="popup-image ripple-white"
                  >
                        <img src="/img/asset/3.jpeg" alt="sertifikat" />
                        </a>
                        </Fancybox>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Detail;
