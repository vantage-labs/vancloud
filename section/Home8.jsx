import React from 'react';

const Home8 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const domainName = document.getElementById('domain_name').value;
    console.log('Domain Name Submitted:', domainName);
  };

  return (
    <>
      <div className="container position-relative z1000 py-5">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h5 className="id-color">Trusted by 20000+ Customers Worldwide</h5>
            <div className="spacer-10"></div>
            <h1>Be part of happy customers</h1>
            <p>
              High performance secured hosting for your website. Don't lose
              anymore clients for the slowest speed of your hosting service.
            </p>
            <a className="btn-main" href="#">
              Get Hosting
            </a>
          </div>
          <div className="col-lg-7">
            <div className="spacer-30"></div>
            <div className="images-group-s1">
              <img
                src="../../images/misc/c1.jpg"
                className="wow fadeInRight"
                data-wow-delay=".25s"
                alt=""
              />
              <img
                src="../../images/misc/c2.jpg"
                className="wow fadeInRight"
                data-wow-delay=".5s"
                alt=""
              />
              <img
                src="../../images/misc/c3.jpg"
                className="wow fadeInRight"
                data-wow-delay=".75s"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="de-marquee-wrapper d-flex position-absolute fadeInRight"
        data-wow-delay="1s"
      >
        <div className="de-marquee-list">
          <div className="d-item">
            <span className="d-item-txt">Shared Hosting</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
            <span className="d-item-txt">VPS Hosting</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
            <span className="d-item-txt">Cloud Hosting</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
            <span className="d-item-txt">WordPress Hosting</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
            <span className="d-item-txt">Domain Name</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
          </div>
        </div>

        {/* Second marquee code must be same as above */}
        <div className="de-marquee-list">
          <div className="d-item">
            <span className="d-item-txt">Shared Hosting</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
            <span className="d-item-txt">VPS Hosting</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
            <span className="d-item-txt">Cloud Hosting</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
            <span className="d-item-txt">WordPress Hosting</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
            <span className="d-item-txt">Domain Name</span>
            <span className="d-item-display">
              <i className="d-item-dot"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home8;
