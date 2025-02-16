import React from 'react';

const Home5 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const domainName = document.getElementById('domain_name').value;
    console.log('Domain Name Submitted:', domainName);
  };

  return (
      <div className="container">
        <div className="row align-items-center">
          <div className="spacer-double"></div>
          <div className="col-lg-4 mb-sm-30">
            <h1>Fast &amp; Affordable Cloud Hosting</h1>
            <p>
              High performance secured hosting for your website. Don't lose
              anymore clients for the slowest speed of your hosting service.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-sm-30 wow fadeInUp">
                <div className="pricing-table pricing-s1">
                  <div className="top">
                    <h3>Plus Cloud</h3>
                    <p className="plan-tagline id">For multiple sites</p>
                  </div>
                  <div className="mid">
                    <p className="price">
                      <span className="currency">$</span>
                      <span className="m opt-1">14.75</span>
                      <span className="y opt-2">12.25</span>
                      <span className="period">per month</span>
                    </p>
                  </div>
                  <div className="bottom">
                    <ul>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>1x</strong> Processing Power
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>1</strong> Website
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>1GB</strong> Disk Space
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>Easy</strong> Website Builder
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>99.99</strong> Uptime Guarantee
                      </li>
                    </ul>
                  </div>
                  <div className="action">
                    <a href="#" className="btn-main">
                      Purchase Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-sm-30 wow fadeInUp">
                <div className="pricing-table pricing-s1">
                  <div className="top">
                    <h3>Deluxe Cloud</h3>
                    <p className="plan-tagline id">For complex sites</p>
                  </div>
                  <div className="mid">
                    <p className="price">
                      <span className="currency">$</span>
                      <span className="m opt-1">18.65</span>
                      <span className="y opt-2">16.35</span>
                      <span className="period">per month</span>
                    </p>
                  </div>
                  <div className="bottom">
                    <ul>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>1x</strong> Processing Power
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>1</strong> Website
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>1GB</strong> Disk Space
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>Easy</strong> Website Builder
                      </li>
                      <li>
                        <i className="fa fa-check"></i>
                        <strong>99.99</strong> Uptime Guarantee
                      </li>
                    </ul>
                  </div>
                  <div className="action">
                    <a href="#" className="btn-main">
                      Purchase Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Home5;
