import React from "react";
import Image from 'next/image';

import Img1 from '../public/images/screenshots/1.jpg';
import Img2 from '../public/images/screenshots/2.jpg';
import Img3 from '../public/images/screenshots/3.jpg';

const Template = () => {
  return (
      <div className="container">
                    <div className="row g-custom-x">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="text-center">
                                <h2>200+ Professionally Designed Website Templates</h2>
                                <p className="lead">Sit labore et officia eiusmod tempor officia eiusmod dolor exercitation nulla dolore ut id velit et ut anim.</p>
                                <div className="spacer-20"></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-md-4 mb30 text-center">
                                    <div className="de-hover rounded-5 shadow-soft mb20">
                                         <Image src={Img1} className="img-fluid" alt="website-builder"/>
                                    </div>
                                    <h6>Blog</h6>
                                </div>
                                <div className="col-md-4 mb30 text-center">
                                    <div className="de-hover rounded-5 shadow-soft mb20">
                                        <Image src={Img2} className="img-fluid" alt="website-builder"/>
                                    </div>
                                    <h6>Business</h6>
                                </div>
                                <div className="col-md-4 mb30 text-center">
                                    <div className="de-hover rounded-5 shadow-soft mb20">
                                        <Image src={Img3} className="img-fluid" alt="website-builder"/>
                                    </div>
                                    <h6>Online Store</h6>
                                </div>
                                <div className="col-md-12 text-center">
                                    <a className="btn-main" href="#">See All Website Templates</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  );
};

export default Template;
