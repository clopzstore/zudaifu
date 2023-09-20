import React, { Component } from "react";
import Fancybox from "../utilities/Fancybox";
class Video extends Component {
  render() {
    return (
      <>
        <div
          className="video-area video-bg">
          <div className="video-bg-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-btn">
                <Fancybox
                        options={{
                          Carousel: {
                            infinite: false,
                          },
                        }}
                      >
                  <a 
                    href="https://www.youtube.com/watch?v=IA2MjcipaIE&ab_channel=clopzStores"
                    data-fancybox
                    className="popup-video ripple-white"
                  >
                   <i className="fab  fa-youtube video"></i>
                  </a>

                  </Fancybox>
                </div>
              </div>
            </div>
          </div>
          <div className="video-shape one">
            <img src="/img/asset/v-s2.png" alt="shape" />
          </div>
          <div className="video-shape two">
            <img src="/img/asset/v-s1.png" alt="shape" />
          </div>
        </div>
      </>
    );
  }
}
export default Video;
