import React from "react";
import { useEffect } from "react";
import CountUpOnScroll from './Countmaster';
import Aos from 'aos';
import "aos/dist/aos.css";

const CounterSection = () => {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
    return (
        <>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" 
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <img className="img-fluid anim-up-down" src="../../images/misc/server.png" alt="Server" />
                        </div>
                        <div className="col-lg-6" 
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <div className="p-sm-30 pb-sm-0 mb-sm-0">
                                <h2>New functionality brings maximum <span className="color-gradient">power</span> to your website.</h2>
                                <p>Reliable web hosting solutions: empowering your online presence with unparalleled performance, exceptional support, and hassle-free scalability.</p>
                                <div className="row">
                                    <div className="col-md-5">
                                        <ul className="ul-style-2">
                                            <li><h4>Instant Activation</h4></li>
                                            <li><h4>99.9% Uptime</h4></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5">
                                        <ul className="ul-style-2">
                                            <li><h4>Reliable Hardware</h4></li>
                                            <li><h4>24 / 7 Support</h4></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="spacer-half"></div>
                                <a className="btn-main" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <section className="no-bottom">
                    <div className="container">
                    <div className="row g-custom-x force-text-center">
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                        <div className="de_count" 
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <h3 className="timer">
                            <CountUpOnScroll start={0} end={15425} duration={3} />
                            </h3>
                            Website Powered
                            <p className="d-small">Lorem ipsum adipisicing officia in adipisicing do velit sit tempor ea consectetur.</p>
                        </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-sm-30">
                        <div className="de_count" data-aos="fade-up"
                            data-aos-delay="150"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <h3 className="timer">
                            <CountUpOnScroll start={0} end={8745} duration={3} />
                            </h3>
                            Clients Supported
                            <p className="d-small">Lorem ipsum adipisicing officia in adipisicing do velit sit tempor ea consectetur.</p>
                        </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-sm-30">
                        <div className="de_count" data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <h3 className="timer">
                            <CountUpOnScroll start={0} end={235} duration={3} />
                            </h3>
                            Awards Winning
                            <p className="d-small">Lorem ipsum adipisicing officia in adipisicing do velit sit tempor ea consectetur.</p>
                        </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-sm-30">
                        <div className="de_count"
                            data-aos="fade-up"
                            data-aos-delay="350"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <h3 className="timer">
                            <CountUpOnScroll start={0} end={15} duration={3} />
                            </h3>
                            Years Experience
                            <p className="d-small">Lorem ipsum adipisicing officia in adipisicing do velit sit tempor ea consectetur.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
        </>
 
    );
}

export default CounterSection ;
