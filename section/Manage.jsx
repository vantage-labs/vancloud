import React from "react";
import { useEffect } from "react";
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
            <h5 className="s2">Easy Steps</h5>
            <h2>How It Works</h2>
            <p className="lead">Easy hosting made simple: streamlined steps for seamless website setup and management.</p>
            <div className="spacer-20"></div>
          </div>
          <div className="col-md-12 wow fadeInUp">
            <div className="container-timeline">
              <ul>
                <li>
                  <h4>Select Plan</h4>
                  <p>Selecting the right hosting plan for the success of your website. Tailored to meet your specific needs.</p>
                </li>
                <li>
                  <h4>Choose Domain</h4>
                  <p>Choose a domain name that reflects your website's purpose, content, or the nature of your business.</p>
                </li>
                <li>
                  <h4>Login/Register</h4>
                  <p>Take the first step towards creating your website and reaching a wider audience by registering today.</p>
                </li>
                <li>
                  <h4>Make Payment</h4>
                  <p>We offer a variety of secure payment methods to make your payment process convenient and hassle-free.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Manage;
