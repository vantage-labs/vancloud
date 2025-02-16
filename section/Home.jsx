import React from 'react';

const home = () => {
    return(
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1>Premium hosting
                                for everyone, <span className="color-gradient">small</span> or <span className="color-gradient">large</span></h1>
                            <p className="lead">High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service.</p>
                            <form action='#' className="row" data-wow-delay="1.25s" id='form_sb' method="post" name="form_sb">
                                <div className="col">
                                    <div className="spacer-10"></div>
                                    <input className="form-control" id='domain_name' name='domain_name' placeholder="enter domain name" type='text'/> 
                                    <a id="btn-submit" href="#">
                                        <i className="arrow_right"></i>
                                    </a>
                                    <div className="clearfix"></div>
                                    <div className="spacer-10"></div>
                                    <p className="d-small">*Reserve your domain today before someone take it.</p>
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
                            <div className="spacer-double"></div>
                        </div>
                        <div className="col-md-6 xs-hide" >
                            <img src="./images/misc/server-2.png" className="lazy img-fluid anim-up-down" alt=""/>
                        </div>
                    </div>
                </div>
    );
}

export default home;