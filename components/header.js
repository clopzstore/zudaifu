import React, { Component } from "react";
class Head extends Component {
  render() {
    return (
      <>
        <header id="home">
          <div id="header-fixed-height"></div>
          <div id="sticky-header" className="tg-menu-area menu-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/*<div className="mobile-nav-toggler">
                    <i className="flaticon-layout"></i>
    </div> */}
                  <div className="menu-wrap">
                    {/* <nav className="menu-nav">
                      <div className="logo">
                        <a href="index.html">
                          <img src="assets/img/logo/logo_01.png" alt="Logo" />
                        </a>
                      </div>
    </nav> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Head;