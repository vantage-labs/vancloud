import React, { useEffect } from "react";
import Image from 'next/image';
import { Pagination, Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Aos from 'aos';
import "aos/dist/aos.css";

import image1 from '../public/images/people/1.jpg';
import image2 from '../public/images/people/2.jpg';
import image3 from '../public/images/people/3.jpg';
import image4 from '../public/images/people/4.jpg';

const Testimonial = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <section id="section-testimonial" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h5 className="s2">Testimoni</h5>
            <h2>
              Dipercaya oleh lebih dari 5.000 pelanggan
              <span className="id-color">di seluruh dunia</span>
            </h2>
            <p className="lead">
              Dipercaya oleh pelanggan, mendukung kesuksesan online mereka dengan
              solusi yang andal dan dukungan luar biasa.
            </p>
            <div className="spacer-20"></div>
          </div>
          <div 
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1200"
          data-aos-easing="ease"> 
          <Swiper className="smallslider"
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            centeredSlides
            loop
            slideToClickedSlide
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            >
            <SwiperSlide>
              <div className="de_testi type-2">
                <blockquote>
                  <h4>Hosting Luar Biasa</h4>
                  <p>
                    Dukungan yang luar biasa, seperti yang belum pernah saya lihat sebelumnya. Terima kasih kepada tim dukungan, mereka sangat membantu. Perusahaan ini menyediakan solusi hebat bagi pelanggan, menjadikannya yang terbaik.
                  </p>
                  <div className="de_testi_by">
                     <Image src={image1} className="rounded-circle" alt="image"/>
                    <span>John, Pixar Studio</span>
                  </div>
                </blockquote>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="de_testi type-2">
                <blockquote>
                  <h4>Hosting Luar Biasa</h4>
                  <p>
                    Dukungan yang luar biasa, seperti yang belum pernah saya lihat sebelumnya. Terima kasih kepada tim dukungan, mereka sangat membantu. Perusahaan ini menyediakan solusi hebat bagi pelanggan, menjadikannya yang terbaik.
                  </p>
                  <div className="de_testi_by">
                    <Image src={image2} className="rounded-circle" alt="image"/>
                    <span>Sarah, Microsoft</span>
                  </div>
                </blockquote>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="de_testi type-2">
                <blockquote>
                  <h4>Hosting Luar Biasa</h4>
                  <p>
                    Dukungan yang luar biasa, seperti yang belum pernah saya lihat sebelumnya. Terima kasih kepada tim dukungan, mereka sangat membantu. Perusahaan ini menyediakan solusi hebat bagi pelanggan, menjadikannya yang terbaik.
                  </p>
                  <div className="de_testi_by">
                    <Image src={image3} className="rounded-circle" alt="image"/>
                    <span>Michael, Apple</span>
                  </div>
                </blockquote>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="de_testi type-2">
                <blockquote>
                  <h4>Hosting Luar Biasa</h4>
                  <p>
                    Dukungan yang luar biasa, seperti yang belum pernah saya lihat sebelumnya. Terima kasih kepada tim dukungan, mereka sangat membantu. Perusahaan ini menyediakan solusi hebat bagi pelanggan, menjadikannya yang terbaik.
                  </p>
                  <div className="de_testi_by">
                    <Image src={image4} className="rounded-circle" alt="image"/>
                    <span>Thomas, Samsung</span>
                  </div>
                </blockquote>
              </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
