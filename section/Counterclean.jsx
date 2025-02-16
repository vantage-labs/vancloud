import React from "react";
import CountUpOnScroll from './Countmaster';

const Counter = () => {
  return (

    <div className="container">
        <div className="row g-custom-x text-center">
          <div className="col-md-3 col-sm-6 mb-sm-30">
            <div className="de_count no-shadow fadeInUp">
              <CountUpOnScroll start={0} end={15425} duration={3} />
              <p>Website Powered</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-sm-30">
            <div className="de_count no-shadow fadeInUp">
              <CountUpOnScroll start={0} end={8745} duration={3} />
              <p>Clients Supported</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-sm-30">
            <div className="de_count no-shadow fadeInUp">
              <CountUpOnScroll start={0} end={235} duration={3} />
              <p>Awards Winning</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-sm-30">
            <div className="de_count no-shadow fadeInUp">
              <CountUpOnScroll start={0} end={15} duration={3} />
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Counter;
