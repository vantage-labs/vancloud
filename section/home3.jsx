import React from 'react';

const Home3 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const domainName = document.getElementById('domain_name').value;
    console.log('Domain Name Submitted:', domainName);
  };

  return (
      <div className="overlay-bg no-top no-bottom light-8">
        <video autoPlay muted loop className="background-video">
          <source src="../../video/local-video-3.mp4" type="video/mp4" />
          {/* Add a fallback message */}
          Your browser does not support the video tag.
        </video>
        <div className="v-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1>
                  Premium hosting for everyone, <span className="color-gradient">small</span> or <span className="color-gradient">large</span>
                </h1>
                <p className="lead">
                  High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service.
                </p>
                <form className="row" onSubmit={handleSubmit} id="form_sb" method="post" name="form_sb">
                  <div className="col">
                    <div className="spacer-10"></div>
                    <input
                      className="form-control"
                      id="domain_name"
                      name="domain_name"
                      placeholder="enter domain name"
                      type="text"
                    />
                    <button id="btn-submit" type="submit">
                      <i className="arrow_right"></i>
                    </button>
                    <div className="clearfix"></div>
                    <div className="spacer-10"></div>
                    <p className="d-small">*Reserve your domain today before someone takes it.</p>
                    <div className="domain-ext pos-left">
                      <div className="ext">
                        <h4 className="id-color">.com</h4>
                        $4.99/year
                      </div>
                      <div className="ext">
                        <h4 className="id-color">.net</h4>
                        $3.99/year
                      </div>
                      <div className="ext">
                        <h4 className="id-color">.co</h4>
                        $2.99/year
                      </div>
                      <div className="ext">
                        <h4 className="id-color">.info</h4>
                        $3.90/year
                      </div>
                      <div className="ext">
                        <h4 className="id-color">.biz</h4>
                        $5.99/year
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 xs-hide">
                <img src="../../images/misc/server-3.png" className="lazy img-fluid anim-up-down" alt="Server" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home3;
