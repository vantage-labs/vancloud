import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Footer from '../../section/Footer';
import Domainfeature from '../../section/Domain-feature';
import Stepdomain from '../../section/Stepdomain';
import Refund from '../../section/Refund'
import Question from '../../section/Question'
import Logo from '../../section/Logo'
import Testimonial from '../../section/Testimonial2'
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const Image1 = "../../images/background/6.jpg";  

const GlobalStyles = createGlobalStyle`
  
`;

export default function Domain() {
  const formRef = useRef(null); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const form = formRef.current;

    if (form) {
      console.log('Form submitted:', new FormData(form)); 
      form.submit();
    }
  };

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
      <section id="domain" className="hero p-0">
        <Parallax bgImage={Image1} strength={300}>  
              <div className="overlay-gradient t50">
                <div className="center-y relative">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8 offset-md-2 text-center">
                                <p className="mb0">Reserve your domain today before someone take it.</p>
                                <h2>Search for your perfect <span className="id-color">domain</span> name</h2>
                                <form
                                  ref={formRef}
                                  action="#"
                                  className="row"
                                  id="form_sb"
                                  method="post"
                                  name="form_sb"
                                  data-wow-delay="1.25s"
                                  onSubmit={handleSubmit}
                                >
                                  <div className="col">
                                    <div className="spacer-10"></div>
                                    <input
                                      className="form-control"
                                      id="domain_name"
                                      name="domain_name"
                                      placeholder="Enter domain name"
                                      type="text"
                                    />
                                    <button
                                      type="submit"
                                      id="btn-submit"
                                      className="btn-submit"
                                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                    >
                                      <i className="arrow_right"></i>
                                    </button>
                                    <div className="clearfix"></div>
                                    <div className="spacer-10"></div>
                                  </div>
                                </form>
                                <div className="spacer-single"></div>
                                <div className="row">
                                    <div className="col-lg-2 col-3 mb-sm-30">
                                        <div className="box-url text-center">
                                            <span className="tld-domain">.com</span>
                                            <p className="tld-subtitle">Special offer</p>
                                            <p className="tld-price id-color">$6.95/yr</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-3 mb-sm-30">
                                        <div className="box-url text-center">
                                            <span className="tld-domain">.net</span>
                                            <p className="tld-subtitle">Special offer</p>
                                            <p className="tld-price id-color">$6.95/yr</p>
                                        </div>
                                    </div>       

                                    <div className="col-lg-2 col-3 mb-sm-30">
                                        <div className="box-url text-center">
                                            <span className="tld-domain">.live</span>
                                            <p className="tld-subtitle">Special offer</p>
                                            <p className="tld-price id-color">$6.95/yr</p>
                                        </div>
                                    </div>    

                                    <div className="col-lg-2 col-3 mb-sm-30">
                                        <div className="box-url text-center">
                                            <span className="tld-domain">.club</span>
                                            <p className="tld-subtitle">Special offer</p>
                                            <p className="tld-price id-color">$6.95/yr</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-3 mb-sm-30">
                                        <div className="box-url text-center">
                                            <span className="tld-domain">.store</span>
                                            <p className="tld-subtitle">Special offer</p>
                                            <p className="tld-price id-color">$6.95/yr</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-3 mb-sm-30">
                                        <div className="box-url text-center">
                                            <span className="tld-domain">.xyz</span>
                                            <p className="tld-subtitle">Special offer</p>
                                            <p className="tld-price id-color">$6.95/yr</p>
                                        </div>
                                    </div>                              
                                </div>
                                <div className="spacer-20"></div>
                                <p className="d-small">*Prices exclude tax of 10% of the total price.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </Parallax>
      </section>

      {/* domainfeature */}
      <section id="domainfeature" className="no-bottom">
       <Domainfeature/>
     </section>

      {/* stepdomain */}
      <section id="stepdomain" className="no-bottom">
       <Stepdomain/>
     </section>


     {/* question */}
      <section id="question">
       <Question/>
     </section>

     {/* refund */}
     <section id="refund" className="p-0">
       <Refund/>
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
