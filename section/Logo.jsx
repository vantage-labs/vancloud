import React from "react";
import Image from 'next/image';
import {  Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Logo1 from '../public/images/logo/1.png';
import Logo2 from '../public/images/logo/2.png';
import Logo3 from '../public/images/logo/3.png';
import Logo4 from '../public/images/logo/4.png';
import Logo5 from '../public/images/logo/5.png';
import Logo6 from '../public/images/logo/6.png';
import Logo7 from '../public/images/logo/7.png';
import Logo8 from '../public/images/logo/8.png';

const Logo = () => {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Swiper className="smallslider"
                            modules={[ Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            loop
                            slideToClickedSlide
                            autoplay={{
                                delay: 2000, 
                                disableOnInteraction: false, 
                            }}
                            breakpoints={{
                              320: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                              },
                              640: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                              },
                              1024: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                              },
                            }}
                            >
                            <SwiperSlide>
                                <Image src={Logo1} className="img-fluid logo-main" alt="logos"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Logo2} className="img-fluid logo-main" alt="logos"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Logo3} className="img-fluid logo-main" alt="logos"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Logo4} className="img-fluid logo-main" alt="logos"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Logo5} className="img-fluid logo-main" alt="logos"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Logo6} className="img-fluid logo-main" alt="logos"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Logo7} className="img-fluid logo-main" alt="logos"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Logo8} className="img-fluid logo-main" alt="logos"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
    );
};

export default Logo;
