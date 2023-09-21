import React, { Component } from "react";
 

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
        <section class="micro-service-section">
            <div class="container">
              
               
                <div class="row">
                    <div class="col-md-12"><div class="sec-divider"></div></div>
                </div>
                <div class="row">
                 
                    <div class="col-lg-12 col-md-12">
                        <h4 class="bp-heading">PERTANYAAN YANG SERING DITANYAKAN</h4>
                        <div id="accordion">
                            <div class="singleFaq">
                                <div class="card-header" id="faq_1">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#accordion_1" aria-expanded="true" aria-controls="accordion_1">
                                        Apakah Zudaifu cocok untuk semua jenis kulit?
                                        </button>
                                    </h5>
                                </div>
                                <div id="accordion_1" class="collapse show" aria-labelledby="faq_1" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>
                                        Gatal pada kulit adalah masalah yang umum dialami oleh banyak orang. Berbagai obat gatal tersedia di pasaran, dan pilihan obat tergantung pada penyebab gatal tersebut. Gatal dapat disebabkan oleh berbagai faktor, seperti gigitan serangga, reaksi alergi, atau infeksi bakteri.

                                        </p>
                                      <p>
                                        
Kulit dapat menjadi gatal karena berbagai kondisi yang berbeda. Beberapa contoh termasuk infeksi jamur, kudis, dan masalah kulit lainnya. Selain sensasi gatal yang mengganggu, kondisi ini juga sering disertai dengan gejala lain, seperti munculnya ruam merah di kulit, pembentukan bentol, atau bahkan kulit yang kering.
                                      </p>
                                    </div>
                                </div>
                            </div>
                            <div class="singleFaq">
                                <div class="card-header" id="faq_2">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#accordion_2" aria-expanded="false" aria-controls="accordion_2">
                                        Apakah Zudaifu aman untuk digunakan selama kehamilan atau menyusui?


                                        </button>
                                    </h5>
                                </div>
                                <div id="accordion_2" class="collapse" aria-labelledby="faq_2" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>
                                        Penggunaan ketoconazole pada kehamilan dikategorikan oleh FDA sebagai kategori C. Penggunaannya pada ibu menyusui tidak disarankan.
                                        </p>
                                      
                                    </div>
                                </div>
                            </div>
                            <div class="singleFaq">
                                <div class="card-header" id="faq_3">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#accordion_3" aria-expanded="false" aria-controls="accordion_3">
                                        Apakah Zudaifu tersedia dalam berbagai varian atau formula?
                                        </button>
                                    </h5>
                                </div>
                                <div id="accordion_3" class="collapse" aria-labelledby="faq_3" data-parent="#accordion">
                                    <div class="card-body">
                                        <p>
                                          Hanya tersedia dalam kemasan botol
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
      </>
    );
  }
}
export default Faq;
