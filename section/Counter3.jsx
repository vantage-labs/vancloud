import React from "react";
import CountUpOnScroll from './Countmaster'; // Assuming this is your count-up component

const Counter3 = () => {
  return (

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
  )
}

export default Counter3;