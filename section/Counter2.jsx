import React from "react";
import CountUpOnScroll from './Countmaster'; // Assuming this is your count-up component

const CounterSection = () => {
  return (
    <div>
      <section className="no-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInUp">
              <img className="img-fluid anim-up-down" src="../../images/misc/server.png" alt="Server" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="p-sm-30 pb-sm-0 mb-sm-0">
                <h2>
                  New functionality brings maximum <span className="color-gradient">power</span> to your website.
                </h2>
                <p>
                  Reliable web hosting solutions: empowering your online presence with unparalleled performance, exceptional support, and hassle-free scalability.
                </p>
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
      </section>

      <section className="no-top">
        <div className="container">
          <div className="row g-custom-x force-text-center">
            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div className="de_count wow fadeInUp">
                <h3 className="timer">
                  <CountUpOnScroll start={0} end={15425} duration={3} />
                </h3>
                Website Powered
                <p className="d-small">Lorem ipsum adipisicing officia in adipisicing do velit sit tempor ea consectetur.</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div className="de_count wow fadeInUp">
                <h3 className="timer">
                  <CountUpOnScroll start={0} end={8745} duration={3} />
                </h3>
                Clients Supported
                <p className="d-small">Lorem ipsum adipisicing officia in adipisicing do velit sit tempor ea consectetur.</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div className="de_count wow fadeInUp">
                <h3 className="timer">
                  <CountUpOnScroll start={0} end={235} duration={3} />
                </h3>
                Awards Winning
                <p className="d-small">Lorem ipsum adipisicing officia in adipisicing do velit sit tempor ea consectetur.</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div className="de_count wow fadeInUp">
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
    </div>
  );
};

export default CounterSection;
