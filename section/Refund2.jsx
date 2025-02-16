import React from "react";

const Refund2 = () => {
  return (
    <section
      id="section-banner"
      className="no-bottom no-top bg-blue"
      data-bgcolor="#DBEDF7"
    >
      <div className="container">
        <div className="row align-items-center g-custom-x">
          <div className="col-lg-4 d-none d-lg-block d-xl-block text-center">
            <img
              className="relative img-fluid mt-60"
              src="../images/misc/1.png"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="p-sm-30 pb-sm-0 mb-sm-0">
              <h2>
                <span className="color-gradient">30 days</span> money back
                guarantee
              </h2>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="p-sm-30">
              <div className="spacer-20 sm-hide"></div>
              <p className="lead">
                If you're not satisfied, we will refund your payment. No hassle,
                no risk. You can cancel the plan at any time.
              </p>
              <div className="spacer-half"></div>
              <a className="btn-main" href="#">
                Get Started
              </a>
              <p className="d-small mt20">
                *Cancellation must be within a maximum of 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refund2;
