import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
function SweetAlertDemo() {
  const Confirm = () => { this.hideAlert.bind(this)}; 
  const openInNewTab = (url) => {
    window.open('https://wa.me/+6285718787490?text=Hallo,%20saya%20ingin%20memesan%20shampoo%20cultusia%20', "_blank", "noreferrer");
  };
  return (
    <SweetAlert  
    showCloseButton
      confirmBtnText="X" 
      customClass="ads"
      onConfirm={Confirm} 
    >
  <img src="/img/produk/shampoo.jpg" alt="popup" onClick={openInNewTab} /> 
    </SweetAlert>
  );
};
export default SweetAlertDemo;
