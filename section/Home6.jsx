import React from 'react';
import Image from 'next/image';

import Image1 from '../public/images/misc/man-smile.png';

const Home6 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const domainName = document.getElementById('domain_name').value;
    console.log('Domain Name Submitted:', domainName);
  };

  return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>
              Trust Your <span className="id-color">Business</span> to the{' '}
              <span className="id-color">World's #1</span> Hosting Provider
            </h1>
            <p>
              High performance secured hosting for your website. Don't lose anymore clients due to slow
              hosting service.
            </p>
            <form
              className="row"
              data-wow-delay="1.25s"
              id="form_sb"
              onSubmit={handleSubmit}
              method="post"
              name="form_sb"
            >
              <div className="col">
                <div className="spacer-10"></div>
                <input
                  className="form-control"
                  id="domain_name"
                  name="domain_name"
                  placeholder="enter domain name"
                  type="text"
                />
                <button type="submit" id="btn-submit" className="btn">
                  <i className="arrow_right"></i>
                </button>
                <div className="clearfix"></div>
                <div className="spacer-10"></div>
                <p className="d-small">*Reserve your domain today before someone takes it.</p>
                <div className="domain-ext pos-left">
                  <div className="ext">
                    <h4 className="id-color">.com</h4> $4.99/year
                  </div>
                  <div className="ext">
                    <h4 className="id-color">.net</h4> $3.99/year
                  </div>
                  <div className="ext">
                    <h4 className="id-color">.co</h4> $2.99/year
                  </div>
                  <div className="ext">
                    <h4 className="id-color">.info</h4> $3.90/year
                  </div>
                  <div className="ext">
                    <h4 className="id-color">.biz</h4> $5.99/year
                  </div>
                </div>
              </div>
            </form>
            <div className="spacer-double sm-hide"></div>
            <div className="spacer-double"></div>
          </div>
          <div className="col-lg-6">
            <div className="d_wrap">
              <Image src={Image1} className="lazy img-fluid fadeIn" alt="imgmenu"/>
              <div className="d_wrap_sm-box b1 text-center wow zoomIn" data-wow-delay=".8s">
                <h3 className="id-color">15425</h3>
                <h6>Website Powered</h6>
              </div>
              <div className="d_wrap_sm-box b2 text-center wow zoomIn" data-wow-delay="1s">
                <h3 className="id-color">99.99%</h3>
                <h6>Uptime</h6>
              </div>
              <div className="d_wrap_sm-box b3 text-center wow zoomIn" data-wow-delay="1.2s">
                <h3 className="id-color">15 Years</h3>
                <h6>Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home6;
