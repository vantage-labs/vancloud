import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Parallax } from "react-parallax";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Hometop from '../../section/Home6';
import Footer2 from '../../section/Footer';
import Manage from '../../section/Manage';
import Server2 from '../../section/Server2';
import Refund3 from '../../section/Refund3';
import Question from '../../section/Question';
import Logo from '../../section/Logo';
import Testimonial2 from '../../section/Testimonial2';
import Counter from '../../section/Counterclean';
import Package from '../../section/Package';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 = "../images/background/1.jpg";


const GlobalStyles = createGlobalStyle`
  /* Add your global styles here */
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
        <title>vntagelabs - Modern Web Hosting & WHMCS Template</title>
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
        <section id="home" className="hero p-0">
          <Parallax bgImage={image1} strength={300}>
            <Hometop />
          </Parallax>
        </section>

       {/* package */}
       <section id="section-pricing" className="p-0">
        <Parallax>  
          <Package/>
        </Parallax>
       </section>

        {/* logos */}
        <section id="logos" className="">
          <Logo />
        </section>

        {/* manage */}
        <section id="manage" className="p-0">
          <Manage />
        </section>

        {/* testimonial */}
        <section id="testimonial" className="no-bottom">
          <Testimonial2 />
        </section>

        {/* server */}
        <section id="server" className="no-bottom">
          <Server2 />
        </section>

        {/* refund */}
        <section id="refund" className="p-0 bg-blue">
          <Refund3 />
        </section>

        {/* question */}
        <section id="question" className="">
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
