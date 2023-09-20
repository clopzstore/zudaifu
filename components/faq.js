import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css';

class Faq extends Component {
  componentDidMount() {
    document.getElementsByClassName("accordion-collapse").onclick =
      function () {
        //  $(this).parent().addClass('active-item');
        // $(this).parent().prev().addClass('prev-item');
        console.log("s");
      };

    /* document.getElementsByClassName("accordion-collapse").on('hide.bs.collapse', function () {
            $(this).parent().removeClass('active-item');
            $(this).parent().prev().removeClass('prev-item');
        });*/
  }
  render() {
    return (
      <>
        <section id="faq">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-6">
            <div className="tg-section-title mb-4 text-center">
                <span className="sub-title">PERTANYAAN DARI PELANGGAN</span>
                <h2 className="title">FAQ  tentang produk shampoo Cultusia</h2>
              </div>
            </div>
            </div>
            <div className="col-lg-12 col-md-10">
              
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Apa itu shampoo Cultusia?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Shampoo Cultusia adalah produk perawatan rambut yang dirancang untuk membersihkan dan merawat rambut Anda. Formula uniknya dirancang untuk berbagai jenis rambut dan masalah rambut.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Apa yang membuat shampoo Cultusia berbeda dari produk lain?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Cultusia menggunakan campuran bahan alami dan bahan perawatan rambut canggih untuk memberikan hasil yang optimal. Formula kami dirancang untuk memperbaiki dan memperkuat rambut sambil menjaga keseimbangan kelembapan alami.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Apakah shampoo Cultusia aman untuk digunakan setiap hari?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Iya, shampoo Cultusia diformulasikan dengan bahan yang lembut dan aman untuk penggunaan sehari-hari. Namun, tergantung pada jenis rambut Anda, penggunaan setiap hari mungkin tidak selalu diperlukan. Penggunaan beberapa kali seminggu mungkin sudah cukup.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Apakah shampoo Cultusia cocok untuk jenis rambut tertentu?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Ya, shampoo Cultusia dirancang untuk berbagai jenis rambut, termasuk rambut kering, rambut berminyak, dan rambut yang rusak. Kami memiliki berbagai varian yang dirancang khusus untuk berbagai masalah rambut.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Faq;
