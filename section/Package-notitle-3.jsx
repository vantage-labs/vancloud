import React, { useState } from "react";

const Package2 = () => {
  //switch
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
  setIsChecked((prevState) => !prevState);
  };
  const switchClassName = isChecked ? 'switch checked' : 'switch';
  const otherElementClassName = isChecked ? 'other-element active' : 'other-element';

  return (
    <div className="container">
      {/* Switch Toggle Section */}
      <div className="row">
        <div className="col text-center">
          <div className="switch-set">
            <div>Monthly Plan</div>
            <div>
              <input
                id="sw-1"
                className={switchClassName}
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
              />
            </div>
            <div>Yearly Plan</div>
            <div className="spacer-20"></div>
          </div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="row g-custom-x">
        {/* Shared Hosting */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-sm-30 wow fadeInUp">
          <div className={`pricing-table pricing-s1 ${otherElementClassName}`}>
            <div className="top">
              <h3>Starter Plan</h3>
              {/* <p className="plan-tagline id">For starter sites</p> */}
            </div>
            <div className="mid">
              <p className="price">
                <span className="currency">$</span>
                <span className="m opt-1 inline">3.45</span>
                <span className="m opt-2 inline">5.59</span>
                <span className="period">per month</span>
              </p>
            </div>
            <div className="bottom">
              <ul>
                <li><i className="fa fa-check"></i><strong>1x</strong> Processing Power</li>
                <li><i className="fa fa-check"></i><strong>1</strong> Website</li>
                <li><i className="fa fa-check"></i><strong>1GB</strong> Disk Space</li>
                <li><i className="fa fa-check"></i><strong>Easy</strong> Website Builder</li>
                <li><i className="fa fa-check"></i><strong>99.99</strong> Uptime Guarantee</li>
              </ul>
            </div>
            <div className="action">
              <a href="#" className="btn-main w-100 opt-1">
                Get Yearly Plan
              </a>
              <a href="#" className="btn-main w-100 opt-2">
                Get Monthly Plan
              </a>
            </div>
          </div>
        </div>

        {/* VPS Hosting */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-sm-30 wow fadeInUp">
          <div className={`pricing-table pricing-s1 table-featured ${otherElementClassName}`}>
            <div className="top">
              <h3>Standard Plan</h3>
              {/* <p className="plan-tagline id">For multiple sites</p> */}
            </div>
            <div className="mid">
              <p className="price">
                <span className="currency">$</span>
                <span className="m opt-1 inline">12.25</span>
                <span className="m opt-2 inline">14.75</span>
                <span className="period">per month</span>
              </p>
            </div>
            <div className="bottom">
              <ul>
                <li><i className="fa fa-check"></i><strong>1x</strong> Processing Power</li>
                <li><i className="fa fa-check"></i><strong>1</strong> Website</li>
                <li><i className="fa fa-check"></i><strong>1GB</strong> Disk Space</li>
                <li><i className="fa fa-check"></i><strong>Easy</strong> Website Builder</li>
                <li><i className="fa fa-check"></i><strong>99.99</strong> Uptime Guarantee</li>
              </ul>
            </div>
            <div className="action">
              <a href="#" className="btn-main w-100 opt-1">
                Get Yearly Plan
              </a>
              <a href="#" className="btn-main w-100 opt-2">
                Get Monthly Plan
              </a>
            </div>
          </div>
        </div>

        {/* Cloud Hosting */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-sm-30 wow fadeInUp">
          <div className={`pricing-table pricing-s1 ${otherElementClassName}`}>
            <div className="top">
              <h3>Business Plan</h3>
              {/* <p className="plan-tagline id">For complex sites</p> */}
            </div>
            <div className="mid">
              <p className="price">
                <span className="currency">$</span>
                <span className="m opt-1 inline">16.35</span>
                <span className="m opt-2 inline">18.65</span>
                <span className="period">per month</span>
              </p>
            </div>
            <div className="bottom">
              <ul>
                <li><i className="fa fa-check"></i><strong>1x</strong> Processing Power</li>
                <li><i className="fa fa-check"></i><strong>1</strong> Website</li>
                <li><i className="fa fa-check"></i><strong>1GB</strong> Disk Space</li>
                <li><i className="fa fa-check"></i><strong>Easy</strong> Website Builder</li>
                <li><i className="fa fa-check"></i><strong>99.99</strong> Uptime Guarantee</li>
              </ul>
            </div>
            <div className="action">
              <a href="#" className="btn-main w-100 opt-1">
                Get Yearly Plan
              </a>
              <a href="#" className="btn-main w-100 opt-2">
                Get Monthly Plan
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="d-small mt20">
            *Prices exclude tax of 10% of the total price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Package2;
