import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Footer from '../../section/Footer';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const Image1 = "../../images/background/subheader.jpg";  

const GlobalStyles = createGlobalStyle`
  
`;

export default function Home() {
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
    <div className="maincontent">
      <header id="header-wrap">
        <Topbar/>
        <Navbar />
      </header>

      {/* home */}
      <Parallax bgImage={Image1} strength={300}>  
      <section id="subheader" className="no-bg">
              <div className="center-y relative text-center">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12 text-center">
                              <h1>Register</h1>
                          </div>
                          <div className="col-lg-6 offset-lg-3">
                          </div>
                      </div>
                  </div>
              </div>
      </section>
      </Parallax>

      {/* register */}
      <section aria-label="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h3>Don&apos;t have an account? Register now.</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
              sunt explicabo.</p>
              <div className="spacer-10"></div>
              
                     <form name="contactForm" id='contact_form' className="form-border" method="post" action='#'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Name:</label>
                                            <input type='text' name='name' id='name' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Email Address:</label>
                                            <input type='text' name='email' id='email' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Choose a Username:</label>
                                            <input type='text' name='username' id='username' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Phone:</label>
                                            <input type='text' name='phone' id='phone' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Password:</label>
                                            <input type='text' name='password' id='password' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Re-enter Password:</label>
                                            <input type='text' name='re-password' id='re-password' className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="spacer-30"></div>

                                    <div className="col-md-12">

                                        <div id='submit' className="pull-left">
                                            <input type='submit' id='send_message' value='Register Now' className="btn-main color-2"/>
                                        </div>

                                        <div className="clearfix"></div>

                                    </div>

                                </div>
                            </form>
              
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
