import React from 'react';

const Home2 = () => {
    return (
      
            <div className="container">
                <div className="row align-items-center">
                    <div className="spacer-double"></div>
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <h1>Enjoy Premium hosting
                            for everyone, <span className="color-gradient">small</span> or <span className="color-gradient">large</span>
                        </h1>
                        <p>High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service.</p>
                    </div>
                    <div className="spacer-10"></div>
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 text-center">
                                <i className="icon-alarmclock de-icon mb20"></i>
                                <h4>Instant Activation</h4>
                                <p className="d-small">Experience the speed of instant activation: launch your services instantly and seamlessly!</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-center">
                                <i className="icon-refresh de-icon mb20"></i>
                                <h4>99.99% Server Uptime</h4>
                                <p className="d-small">Server uptime for uninterrupted online presence and maximum business continuity.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-center">
                                <i className="icon-cloud de-icon mb20"></i>
                                <h4>Daily Data Backup</h4>
                                <p className="d-small">Empowering you with daily data assurance and securing your peace of mind.</p>
                            </div>
                            <div className="spacer-10"></div>
                            <div className="col-lg-12 text-center">
                                <a className="btn-main" href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    );
}

export default Home2;
