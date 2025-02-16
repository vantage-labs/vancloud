import React from "react";

const Manage = () => {
  return (
      <div className="container">
          <div className="row">
              <div className="col-lg-6 offset-lg-3 text-center">
                  <h5 className="s2">Easy Steps</h5>
                  <h2>Features that brings maximum power to your website.</h2>
                  <div className="spacer-20"></div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-3">
                  <i className="icon-alarmclock de-icon mb20"></i>
                  <h4>Instant Activation</h4>
                  <p>Experience the speed of instant activation: launch your services instantly and seamlessly!</p>
              </div>
              <div className="col-md-3">
                  <i className="icon-refresh de-icon mb20"></i>
                  <h4>99.99% Server Uptime</h4>
                  <p>Server uptime for uninterrupted online presence and maximum business continuity.</p>
              </div>
              <div className="col-md-3">
                  <i className="icon-layers de-icon mb20"></i>
                  <h4>Multiple Data Centers</h4>
                  <p>Strengthening your online presence with global reach and unparalleled resilience.</p>
              </div>
              <div className="col-md-3">
                  <i className="icon-cloud de-icon mb20"></i>
                  <h4>Daily Data Backup</h4>
                  <p>Empowering you with daily data assurance and securing your peace of mind.</p>
              </div>
          </div>
      </div>
  );
};

export default Manage;
