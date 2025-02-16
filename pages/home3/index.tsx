import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Parallax } from "react-parallax";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Hometop from '../../section/home3';
import Footer2 from '../../section/Footer';
import Manage from '../../section/Manage';
import Server2 from '../../section/Server2';
import Testimonial from '../../section/Testimonial';
import Refund2 from '../../section/Refund2';
import Question from '../../section/Question';
import Logo from '../../section/Logo';
import Counter2 from '../../section/Counter2';
import Package from '../../section/Package';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';


const bgImage1 = "../../images/background/1.jpg";  
const image1 ="../../images/background/1.jpg";


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
        <section id="home" className="hero p-0">
            <Hometop />
        </section>

        {/* counter */}
        <section id="counter" className="no-bottom">
         <Counter2/>
        </section>

        {/* package */}
        <section id="section-pricing" className="p-0">
          <Parallax bgImage={image1} strength={50}>  
            <Package/>
          </Parallax>
        </section>

        {/* manage */}
        <section id="manage" className="">
          <Manage />
        </section>

        {/* server */}
        <section id="server" className="p-0">
        <Parallax bgImage={image1} strength={50}>  
          <Server2 />
        </Parallax>
        </section>

        {/* testimonial */}
        <section id="testimonial" className="p-0">
         <Testimonial/>
        </section>

        {/* refund */}
        <section id="refund" className="p-0">
          <Refund2 />
        </section>

        {/* question */}
        <section id="question" className="">
          <Question />
        </section>

        {/* logos */}
        <section id="logos" className="no-top">
            <Logo />
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
