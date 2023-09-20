import React, { Component } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sweetalert: null,
    };
  }
  render() {
    //const Confirm = () => { this.hideAlert.bind(this)};
    //localStorage.setItem("alert", "0");
    const MySwal = withReactContent(Swal);
    const openInNewTab = (url) => {
      window.open(
        "https://wa.me/+6285718787490?text=Hallo,%20saya%20ingin%20memesan%20shampoo%20cultusia%20",
        "_blank",
        "noreferrer"
      );
      localStorage.setItem("alert", "1");
      MySwal.close()
    };
    const closeNewTab = (url) => {
      MySwal.close()
      localStorage.setItem("alert", "1");
    };
    var swal_alert = localStorage.getItem("alert");
    if (swal_alert != 1) {
      MySwal.fire({
        title: (
          <img src="/img/produk/gfd.gif" alt="poto"  />
        ),
     html: (<div><div class="here" onClick={closeNewTab}></div></div>),
        showCancelButton: false,
        showCloseButton: true, // optional
        showConfirmButton: false, // optional
        allowOutsideClick: false,

        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
         // MySwal.showLoading();
        },
      }).then(() => {});
    }
   
    return <></>;
  }
}
export default Popup;
