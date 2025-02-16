import React from 'react';

const Home7 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const domainName = document.getElementById('domain_name').value;
    console.log('Domain Name Submitted:', domainName);
  };

  return (
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>
              The Best Web Hosting for Every <span className="id-color">Business</span>
            </h1>
            <p className="text-dark">
              High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service.
            </p>
            <div className="row">
              <div className="col-md-6">
                <ul className="ul-style-2 s3 text-dark">
                  <li>
                    <span className="d-label">Free</span> Domain Registration
                  </li>
                  <li>
                    <span className="d-label">Free</span> SSL
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="ul-style-2 s3 text-dark">
                  <li>
                    <span className="d-label">Free</span> Email
                  </li>
                  <li>
                    <span className="d-label">Free</span> Website Builder
                  </li>
                </ul>
              </div>
            </div>
            <div className="spacer-10"></div>
            <form onSubmit={handleSubmit}>

              <button type="submit" className="btn-main">Get Started Now</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Home7;
