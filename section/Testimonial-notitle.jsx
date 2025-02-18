import React from "react";
import Image from 'next/image';
import { Pagination, Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../public/images/people/1.jpg';
import image2 from '../public/images/people/2.jpg';
import image3 from '../public/images/people/3.jpg';
import image4 from '../public/images/people/4.jpg';

const Testimonial = () => {
  return (

      <div className="container">
        <div className="row">
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
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            >
            <SwiperSlide>
              <div className="de_testi type-2">
                <blockquote>
                  <h4>Excellent Hosting</h4>
                  <p>
                    Great support, like I have never seen before. Thanks to the
                    support team, they are very helpful. This company provides
                    customers great solutions, which makes them the best.
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
                  <h4>Excellent Hosting</h4>
                  <p>
                    Great support, like I have never seen before. Thanks to the
                    support team, they are very helpful. This company provides
                    customers great solutions, which makes them the best.
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
                  <h4>Excellent Hosting</h4>
                  <p>
                    Great support, like I have never seen before. Thanks to the
                    support team, they are very helpful. This company provides
                    customers great solutions, which makes them the best.
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
                  <h4>Excellent Hosting</h4>
                  <p>
                    Great support, like I have never seen before. Thanks to the
                    support team, they are very helpful. This company provides
                    customers great solutions, which makes them the best.
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
  );
};

export default Testimonial;
