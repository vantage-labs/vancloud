import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import Link from 'next/link'
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Footer from '../../section/Footer';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const Image1 = "../../images/background/subheader.jpg";  

import img1 from '../../public/images/domains/dot-com.png';
import img2 from '../../public/images/domains/dot-net.png';
import img3 from '../../public/images/domains/dot-org.png';
import img4 from '../../public/images/domains/dot-live.png';
import img5 from '../../public/images/domains/dot-store.png';
import img6 from '../../public/images/domains/dot-online.png';
import img7 from '../../public/images/domains/dot-name.png';
import img8 from '../../public/images/domains/dot-site.png';


const GlobalStyles = createGlobalStyle`
  
`;

export default function Domain() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 1000)
      }
    }, []);

  /* elements div for loader */
  const divs = Array.from({ length: 8 });

  return (
    <>
    <Head>
      <title>Hostco - Modern Web Hosting & WHMCS Template</title>
    </Head>

    <GlobalStyles/>

    {/* loader */}
    <div id='mainpreloader'>
        <div id="de-loader" className="fadeOut">
          <div className="lds-roller">
            {divs.map((_, index) => (
            <div key={index} />
            ))}
          </div>
        </div>
    </div>

    {/* menu */}
    <div className="home">
      <header id="header-wrap">
        <Topbar/>
        <Navbar />
      </header>

      {/* home */}
      <Parallax bgImage={Image1} strength={300} className="w-100">  
      <section id="help" className="no-bg">
        <div className="center-y relative text-center">
              <div className="container">
                <div className="row">
                    <div className="spacer-single"></div>
                    <div className="col-md-12 text-center">
                      <h1>Top Level Domain</h1>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
          </div>
      </section>
      </Parallax>

      {/* pricing */}
      <section id="pricing">
       <div className="container">
          <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                  <div className="domain-card shadow-soft">
                      <Image src={img1} className="img-fluid" alt="img"/>
                      <p>Build trust with most popular domain.</p>
                      <div className="d-price-before">$12.99/yr</div>
                      <div className="d-price"><span className="d-atr-1">$</span>6.95<span className="d-atr-2">/yr</span></div>
                      <Link href="#" className="btn-main">Register</Link>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6">
                  <div className="domain-card shadow-soft">
                      <Image src={img2} className="img-fluid" alt="img"/>
                      <p>The true internet original.</p>
                      <div className="d-price-before">$12.99/yr</div>
                      <div className="d-price"><span className="d-atr-1">$</span>6.95<span className="d-atr-2">/yr</span></div>
                      <Link href="#" className="btn-main">Register</Link>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6">
                  <div className="domain-card shadow-soft">
                      <Image src={img3} className="img-fluid" alt="img"/>
                      <p>The domain you can trust.</p>
                      <div className="d-price-before">$12.99/yr</div>
                      <div className="d-price"><span className="d-atr-1">$</span>6.95<span className="d-atr-2">/yr</span></div>
                      <Link href="#" className="btn-main">Register</Link>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6">
                  <div className="domain-card shadow-soft">
                      <Image src={img4} className="img-fluid" alt="img"/>
                      <p>Perfect for real time content.</p>
                      <div className="d-price-before">$12.99/yr</div>
                      <div className="d-price"><span className="d-atr-1">$</span>6.95<span className="d-atr-2">/yr</span></div>
                      <Link href="#" className="btn-main">Register</Link>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6">
                  <div className="domain-card shadow-soft">
                      <Image src={img5} className="img-fluid" alt="img"/>
                      <p>Suitable online stores and retail brands.</p>
                      <div className="d-price-before">$12.99/yr</div>
                      <div className="d-price"><span className="d-atr-1">$</span>6.95<span className="d-atr-2">/yr</span></div>
                      <Link href="#" className="btn-main">Register</Link>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6">
                  <div className="domain-card shadow-soft">
                      <Image src={img6} className="img-fluid" alt="img"/>
                      <p>Great domain alternative.</p>
                      <div className="d-price-before">$12.99/yr</div>
                      <div className="d-price"><span className="d-atr-1">$</span>6.95<span className="d-atr-2">/yr</span></div>
                      <Link href="#" className="btn-main">Register</Link>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6">
                  <div className="domain-card shadow-soft">
                      <Image src={img7} className="img-fluid" alt="img"/>
                      <p>Perfect for representation your personal name.</p>
                      <div className="d-price-before">$12.99/yr</div>
                      <div className="d-price"><span className="d-atr-1">$</span>6.95<span className="d-atr-2">/yr</span></div>
                      <Link href="#" className="btn-main">Register</Link>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6">
                  <div className="domain-card shadow-soft">
                      <Image src={img8} className="img-fluid" alt="img"/>
                      <p>Great domain alternative.</p>
                      <div className="d-price-before">$12.99/yr</div>
                      <div className="d-price"><span className="d-atr-1">$</span>6.95<span className="d-atr-2">/yr</span></div>
                      <Link href="#" className="btn-main">Register</Link>
                  </div>
              </div>


          </div>                            
      </div>
      </section>


      {/* footer */}
      <section id="footer" className="p-0">
        <Footer/>
      </section>


    </div>
    <ScrollToTopBtn />
    </>
  )
}
