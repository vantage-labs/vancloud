import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Manage = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
      <div className="container"  
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="1200"
        data-aos-easing="ease">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h5 className="s2">Langkah Mudah</h5>
            <h2>Cara Kerjanya</h2>
            <p className="lead">Hosting mudah dan sederhana: langkah-langkah yang disederhanakan untuk pengaturan dan pengelolaan situs web yang mulus.</p>
            <div className="spacer-20"></div>
          </div>
          <div className="col-md-12 wow fadeInUp">
            <div className="container-timeline">
              <ul>
                <li>
                  <h4>Pilih Paket</h4>
                  <p>Pilih paket hosting yang sesuai untuk kesuksesan situs web Anda. Disesuaikan dengan kebutuhan spesifik Anda.</p>
                </li>
                <li>
                  <h4>Pilih Domain</h4>
                  <p>Pilih nama domain yang mencerminkan tujuan, konten, atau sifat bisnis situs web Anda.</p>
                </li>
                <li>
                  <h4>Masuk/Daftar</h4>
                  <p>Ambil langkah pertama untuk membuat situs web Anda dan menjangkau audiens yang lebih luas dengan mendaftar hari ini.</p>
                </li>
                <li>
                  <h4>Lakukan Pembayaran</h4>
                  <p>Kami menawarkan berbagai metode pembayaran yang aman untuk membuat proses pembayaran Anda lebih nyaman dan bebas hambatan.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Manage;
