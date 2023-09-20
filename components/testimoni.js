import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ParallaxBanner } from "react-scroll-parallax";
import Slider from "react-slick";
class Testimoni extends Component {
  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block" }}
          onClick={onClick}
        > <img src="/img/asset/next.png" alt="arrow" /></div>
      );
    }
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block"}}
          onClick={onClick}
        > <img src="/img/asset/prev.png" alt="arrow" /></div>
      );
    }
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <ParallaxBanner
          layers={[{ image: "/img/asset/bgt.jpg", speed: -15 }]}
          className="paralax"
        >
          <section class="testimonial-area testimonial-bg">
            <div class="testimonial-overlay"></div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xxl-8 col-xl-9 col-lg-11">
                  <div class="testimonial-active">
                    <Slider {...settings}>
                      <div class="testimonial-item text-center">
                        <p>
                          "Saya sangat puas dengan hasil yang saya dapat setelah
                          menggunakan shampoo Cultusia selama beberapa minggu.
                          Rambut saya terasa lebih lembut dan berkilau, dan
                          masalah ketombe yang saya alami pun berkurang secara
                          signifikan. Wanginya juga sangat menyenangkan!"
                        </p>
                        <div class="testimonial-avatar-wrap">
                          <div class="testi-avatar-img">
                            <img src="/img/user/1.jpg" alt="img" />
                          </div>
                          <div class="testi-avatar-info">
                            <h5 class="name">Sri Rahayu</h5>
                          </div>
                        </div>
                      </div>
                      <div class="testimonial-item text-center">
                        <p>
                          "Rambut saya sering kering dan kusam karena sering
                          mewarnainya. Namun, setelah menggunakan shampoo dan
                          kondisioner Cultusia varian perawatan intensif, rambut
                          saya terasa jauh lebih halus dan terhidrasi. Sekarang
                          saya merasa lebih percaya diri dengan rambut saya!"
                        </p>
                        <div class="testimonial-avatar-wrap">
                          <div class="testi-avatar-img">
                            <img src="/img/user/2.jpg" alt="img" />
                          </div>
                          <div class="testi-avatar-info">
                            <h5 class="name">Rudi Santoso</h5>
                          </div>
                        </div>
                      </div>
                    </Slider>
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
export default Testimoni;
