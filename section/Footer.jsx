import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../public/images/logo.png';
import Img1 from '../public/images/payments-logo/visa.png';
import Img2 from '../public/images/payments-logo/master-card.png';
import Img3 from '../public/images/payments-logo/jcb.png';
import Img4 from '../public/images/payments-logo/paypal.png';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer className="footer-light">
            <div className="container">
                <div className="row g-custom-x">
                    <div className="col-lg-4">
                        <Link href="#">
                            <Image src={Logo} alt="logofooter"/>
                            <div className="spacer-20"></div>
                            <p>We are Hostco, a web hosting company with 24/7 customer support. We provide best hosting solutions for your hosting needs. Our clients from personal to corporate. Our data center are all over the world to ensure your website is always up. You can choose shared hosting, vps hosting or cloud hosting. You can also be hosting reseller here. Happy hosting with us.</p>
                        </Link>
                        <div className="spacer-10"></div>
                        <div className="widget">
                            <h5>We Accepted</h5>
                            <Image src={Img1} className="img-card-sm" alt="logo"/>
                            <Image src={Img2} className="img-card-sm" alt="logo"/>
                            <Image src={Img3} className="img-card-sm" alt="logo"/>
                            <Image src={Img4} className="img-card-sm" alt="logo"/>
                            </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-6">
                        <div className="widget">
                            <h5>Hosting</h5>
                            <ul>
                                <li><a href="#">Web Hosting</a></li>
                                <li><a href="#">VPS Hosting</a></li>
                                <li><a href="#">Cloud Hosting</a></li>
                                <li><a href="#">WordPress Hosting</a></li>
                                <li><a href="#">Email Hosting</a></li>
                                <li><a href="#">CMS Hosting</a></li>
                                <li><a href="#">Ecommerce Hosting</a></li>
                                <li><a href="#">Website Builder</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="widget">
                            <h5>Company</h5>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Affiliates</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Press Releases</a></li>
                            </ul>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h5>Newsletter</h5>
                            <p>Signup for our newsletter to get the latest news in your inbox.</p>
                            <form action="blank.php" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                <div className="col text-center">
                                    <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> <a href="#" id="btn-subscribe"><i className="arrow_right bg-color-secondary"></i></a>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small>Your email is safe with us. We don't spam.</small>
                            <div className="spacer-30"></div>
                            <div className="widget">
                                <h5>Follow Us on</h5>
                                <div className="social-icons">
                                    <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-pinterest fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-rss fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <Link href="">
                                        Copyright {currentYear} - Hostco by Designesia
                                    </Link>
                                </div>
                                <ul className="menu-simple">
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;