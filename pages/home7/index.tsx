import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Parallax } from "react-parallax";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Hometop from '../../section/Home7';
import Footer2 from '../../section/Footer';
import Manage from '../../section/Manage';
import Refund4 from '../../section/Refund4';
import Question from '../../section/Question';
import Logo from '../../section/Logo';
import Testimonial4 from '../../section/Testimonial4';
import Counter from '../../section/Counterclean';
import Package from '../../section/Package3';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 = "../../images/background/11.jpg";


const GlobalStyles = createGlobalStyle`
  #topbar {display:none;}
  #header-wrap nav.navbar {
    background: #fff;
  }
  .logo-main{
    display: none;
    &.white{
      display: none;
    }
    &.green{
      display: block;
    }
  }
  * {
    --primary-color: #8ec975;
    --primary-color-rgb: 142, 201, 117;
    --secondary-color: #71c055;
    --secondary-color-rgb: 113, 192, 85;
  }
  .bg-green {
    background-color: rgb(73, 158, 37);
  }
  section{
    background:#fff;
    &.gray{
      background: rgb(228, 232, 236);
    }
    &.bgwhite{
      background:#fff;
    }
  }
  @media only screen and (max-width: 992px){
  .logo-mobile{
    display: none;
  }
  .logo-main{
    display: none;
    &.white{
      display: none;
    }
    &.green{
      display: block !important;
    }
  }
  #header-wrap.sticky {
      .logo-main{
        display: none;
        &.white{
          display: none !important;
        }
      }
    }
  }
`;

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('mainpreloader');
      if (loader)
        setTimeout(() => {
          loader.classList.add("fadeOut");
          loader.style.display = 'none';
        }, 1000);
    }
  }, []);

  /* elements div for loader */
  const divs = Array.from({ length: 8 });

  return (
    <>
      <Head>
        <title>Hostco - Modern Web Hosting & WHMCS Template</title>
      </Head>

      <GlobalStyles />

      {/* loader */}
      <div id="mainpreloader">
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
          <Topbar />
          <Navbar />
        </header>

        {/* home */}
        <section id="home" className="hero pt-4 no-bottom">
        <Parallax bgImage={image1} strength={300}>
          <Hometop/>
        </Parallax>
        </section>

        {/* refund */}
        <section id="refund" className="p-0 bg-green text-light">
          <Refund4 />
        </section>

         {/* testimonial */}
         <section id="testimonial" className="p-2">
          <Testimonial4 />
        </section> 

        {/* package */}
        <section id="section-pricing" className="gray">
          <Package/>
        </section>

        {/* logos */}
        <section id="logos" className="pt40 pb40 bg-green">
            <Logo />
         </section>

        {/* manage */}
        <section id="manage" className="gray">
          <Manage />
        </section>

        {/* question */}
        <section id="question" className="bg-white">
          <Question />
        </section>
        
        {/* footer */}
        <section id="footer" className="p-0">
          <Footer2 />
        </section>
      </div>

      <ScrollToTopBtn />
    </>
  );
}
