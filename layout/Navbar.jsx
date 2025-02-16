import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

import logoImg from '../public/images/logo.png';
import logoImgwhite from '../public/images/logo-light.png';
import logoImggreen from '../public/images/logo-green.png';
import logoImg1 from '../public/images/logo-mobile.png';

import Hosting1 from '../public/images/svg/server-svgrepo-com.svg';
import Hosting2 from '../public/images/svg/cloud-svgrepo-com.svg';
import Hosting3 from '../public/images/svg/server-2-svgrepo-com.svg';
import Hosting4 from '../public/images/svg/wordpress-svgrepo-com.svg';

import Domain1 from '../public/images/svg/domain-registration-svgrepo-com.svg';
import Domain2 from '../public/images/svg/transfer-svgrepo-com.svg';
import Domain3 from '../public/images/svg/price-tag-svgrepo-com.svg';
import Domain4 from '../public/images/svg/www-svgrepo-com.svg';

const Navbar= function() {

  const [showmenu, btn_icon] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null); // To track which dropdown is open

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle the specific dropdown by index
  };

  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
       /* btn_icon(false); */
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");
        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } 
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return(
        <nav className="navbar transition">
        <div className="container">
          
          <div className="dekstopmenu">
            <div className="de-flex-col header-col-mid">
              <Link  className="navbar-brand" href="/">
                <Image src={logoImg} className="img-fluid logo-main" alt="logo"/>
                <Image src={logoImgwhite} className="img-fluid logo-main white" alt="logo"/>
                <Image src={logoImggreen} className="img-fluid logo-main green" alt="logo"/>
                <Image src={logoImg1} className="img-fluid logo-mobile" alt="logo"/>
              </Link>
            </div>

            {/* menu Here */}
            <div className="de-flex-col header-col-mid mainmenu">
            <ul id="mainmenu" className={`${showmenu ? 'mobile-menu' : ''}`}>
                <li className={`menu-item-has-children has-child ${openDropdown === 1 ? 'open' : ''}`}>
                    <Link href="/" className="menu-item">
                        Home
                    </Link>
                    <span className="dropdown-arrow" onClick={() => toggleDropdown(1)}></span>
                    <ul>
                        <li><Link className="menu-item" href="/">Homepage 1</Link></li>
                        <li><Link className="menu-item" href="/home2">Homepage 2</Link></li>
                        <li><Link className="menu-item" href="/home3">Homepage 3</Link></li>
                        <li><Link className="menu-item" href="/home4">Homepage 4</Link></li>
                        <li><Link className="menu-item" href="/home5">Homepage 5</Link></li>
                        <li><Link className="menu-item" href="/home6">Homepage 6</Link></li>
                        <li><Link className="menu-item" href="/home7">Homepage 7</Link></li>
                        <li><Link className="menu-item" href="/home8"><b>New</b> Homepage 8</Link></li>
                        {/* <li><Link className="menu-item" href="/home8">Homepage Dark</Link></li>
                        <li><Link className="menu-item" href="/">Homepage Dark 2</Link></li>
                        <li><Link className="menu-item" href="/">Homepage Dark 3</Link></li> */}
                    </ul>
                </li>
                <li className={`menu-item-has-children has-child ${openDropdown === 2 ? 'open' : ''}`}>
                    <Link className="menu-item" href="/">Hosting</Link>
                    <span className="dropdown-arrow" onClick={() => toggleDropdown(2)}></span>
                    <ul className="mega">
                        <li>
                            <div className="container">
                                <div className="sb-menu p-4 pb-0">
                                    <div className="row g-custom-x">
                                        <div className="col-lg-4 mb-sm-30">
                                            <h4>Hosting Made Easy</h4>
                                            <p>High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service. More than 100k websites hosted.</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <Link className="box-icon mb20" href="/shared-hosting">
                                                <Image src={Hosting1} className="img-fluid" alt="imgmenu"/>
                                                <div className="d-inner">
                                                    <h4>Shared Hosting</h4>
                                                    Simple and powerfull hosting for everyone.
                                                </div>
                                            </Link>
                                            <Link className="box-icon mb20" href="/cloud-hosting">
                                                <Image src={Hosting2} className="img-fluid" alt="imgmenu"/>
                                                <div className="d-inner">
                                                    <h4>Cloud Hosting</h4>
                                                    For more speed & less downtime.
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4">
                                            <Link className="box-icon mb20" href="/vps-hosting">
                                                <Image src={Hosting3} className="img-fluid" alt="imgmenu"/>
                                                <div className="d-inner">
                                                    <h4>VPS Hosting</h4>
                                                    For power and flexibility you need.
                                                </div>
                                            </Link>
                                            <Link className="box-icon mb20" href="/wp-hosting">
                                                <Image src={Hosting4} className="img-fluid" alt="imgmenu"/>
                                                <div className="d-inner">
                                                    <h4>WordPress Hosting</h4>
                                                    Optimized hosting for WordPress sites.
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item-has-children has-child ${openDropdown === 3 ? 'open' : ''}`}>
                    <Link className="menu-item" href="/domain">Domain</Link>
                    <span className="dropdown-arrow" onClick={() => toggleDropdown(3)}></span>
                    <ul className="mega">
                        <li>
                            <div className="container">
                                <div className="sb-menu p-4">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <Link className="box-icon mb20" href="/domain">
                                                <Image src={Domain1} className="img-fluid" alt="domain"/>
                                                <div className="d-inner">
                                                    <h4>Domain Registration</h4>
                                                    Search for your perfect domain name.
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3">
                                            <Link className="box-icon mb20" href="/domain-transfer">
                                                <Image src={Domain2} className="img-fluid" alt="domain"/>
                                                <div className="d-inner">
                                                    <h4>Domain Transfer</h4>
                                                    Transfer your domain with easy steps.
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3">
                                            <Link className="box-icon mb20" href="/domain-pricing">
                                                <Image src={Domain3} className="img-fluid" alt="domain"/>
                                                <div className="d-inner">
                                                    <h4>Domain Pricing</h4>
                                                    Complete list of domain pricing.
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3">
                                            <Link className="box-icon mb20" href="/domain-top">
                                               <Image src={Domain4} className="img-fluid" alt="domain"/>
                                                <div className="d-inner">
                                                    <h4>Top Level Domain</h4>
                                                    Best domain to start your business.
                                                </div>
                                            </Link>
                                        </div>   

                                        <div className="clearfix"></div>

                                        <div className="col-md-2 col-sm-3 col-6 mb-sm-30">
                                            <div className="box-url text-center">
                                                <span className="tld-domain">.com</span>
                                                <p className="tld-subtitle">Special offer</p>
                                                <p className="tld-price id-color">$6.95/yr</p>
                                            </div>
                                        </div>

                                        <div className="col-md-2 col-sm-3 col-6 mb-sm-30">
                                            <div className="box-url text-center">
                                                <span className="tld-domain">.net</span>
                                                <p className="tld-subtitle">Special offer</p>
                                                <p className="tld-price id-color">$6.95/yr</p>
                                            </div>
                                        </div>       

                                        <div className="col-md-2 col-sm-3 col-6 mb-sm-30">
                                            <div className="box-url text-center">
                                                <span className="tld-domain">.live</span>
                                                <p className="tld-subtitle">Special offer</p>
                                                <p className="tld-price id-color">$6.95/yr</p>
                                            </div>
                                        </div>    

                                        <div className="col-md-2 col-sm-3 col-6 mb-sm-30">
                                            <div className="box-url text-center">
                                                <span className="tld-domain">.club</span>
                                                <p className="tld-subtitle">Special offer</p>
                                                <p className="tld-price id-color">$6.95/yr</p>
                                            </div>
                                        </div>

                                        <div className="col-md-2 col-sm-3 col-6 mb-sm-30">
                                            <div className="box-url text-center">
                                                <span className="tld-domain">.store</span>
                                                <p className="tld-subtitle">Special offer</p>
                                                <p className="tld-price id-color">$6.95/yr</p>
                                            </div>
                                        </div>

                                        <div className="col-md-2 col-sm-3 col-6 mb-sm-30">
                                            <div className="box-url text-center">
                                                <span className="tld-domain">.xyz</span>
                                                <p className="tld-subtitle">Special offer</p>
                                                <p className="tld-price id-color">$6.95/yr</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li><Link className="menu-item" href="/website">Websites</Link></li>
                <li><Link className="menu-item" href="/help">Help</Link></li>
                <li className={`menu-item-has-children has-child ${openDropdown === 4 ? 'open' : ''}`}>
                    <Link className="menu-item" href="#">Pages</Link>
                    <span className="dropdown-arrow" onClick={() => toggleDropdown(4)}></span>
                    <ul>
                        <li><Link className="menu-item" href="/right-sidebar">News Standard</Link>
                            <ul>
                                <li><Link className="menu-item" href="/right-sidebar">Right Sidebar</Link></li>
                                <li><Link className="menu-item" href="/left-sidebar">Left Sidebar</Link></li>
                                <li><Link className="menu-item" href="/no-sidebar">No Sidebar</Link></li>
                            </ul>
                        </li>
                        <li><Link className="menu-item" href="/grid-right-sidebar">News Grid</Link>
                            <ul>
                                <li><Link className="menu-item" href="/grid-right-sidebar">Right Sidebar</Link></li>
                                <li><Link className="menu-item" href="/grid-left-sidebar">Left Sidebar</Link></li>
                                <li><Link className="menu-item" href="/grid-no-sidebar">No Sidebar</Link></li>
                            </ul>
                        </li>
                        <li><Link className="menu-item" href="/contact">Contact</Link></li>
                        <li><Link className="menu-item" href="/login">Login</Link></li>
                        <li><Link className="menu-item" href="/register">Register</Link></li>
                        <li><Link className="menu-item" href="/404">404</Link>
                            <ul>
                                <li><Link className="menu-item" href="/404">404 Light</Link></li>
                                <li><Link className="menu-item" href="/404-dark">404 Dark</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item-has-children has-child ${openDropdown === 5 ? 'open' : ''}`}>
                    <Link className="menu-item" href="#">More</Link>
                    <span className="dropdown-arrow" onClick={() => toggleDropdown(5)}></span>
                    <ul>
                        <li><Link className="menu-item" href="/pricing-table">Pricing Table</Link></li>
                        <li><Link className="menu-item" href="/map">Map</Link></li>
                        <li><Link className="menu-item" href="/cards">Cards</Link></li>
                        <li><Link className="menu-item" href="/counters">Counters</Link></li>
                    </ul>
                </li>
            </ul>
            </div>
            {/* menu Here */}

            <div className="de-flex-col mobile">
                <div className="menu_side_area">
                    <Link href="/login" className="btn-main">Free Trial</Link>
                    <button className="burgermenu" type="button" onClick={() => btn_icon(!showmenu)}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
          </div>
          
          
        </div>
      </nav>
    )
}

export default Navbar;