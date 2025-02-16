import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Cookies from '../../section/Cookies';
import Footer from '../../section/Footer';
import Package from '../../section/Package-notitle-3';
import Easystep from '../../section/Easystep';
import Manage from '../../section/Manage';
import Refund from '../../section/Refund';
import Question from '../../section/Question';
import Logo from '../../section/Logo';
import Testimonial from '../../section/Testimonial2';
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
    <div className="home">
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
                              <h1>Wordpress Hosting</h1>
                          </div>
                          <div className="col-lg-6 offset-lg-3">
                              <p className="lead">Optimized hosting for WordPress sites.</p>
                          </div>
                      </div>
                  </div>
              </div>
      </section>
      </Parallax>

    {/* package */}
    <section id="package" className="no-top mt-100 no-bg">
      <Package />
    </section>

    {/* easystep */}
    <section id="easystep" className="no-top no-bg">
      <Easystep />
    </section>
     
      {/* testimonial */}
      <section id="testimonial" className="p-0">
       <Testimonial/>
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

      <Cookies/>

    </div>
    <ScrollToTopBtn />
    </>
  )
}
