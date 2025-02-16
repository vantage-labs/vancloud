import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Parallax } from "react-parallax";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Hometop from '../../section/home2';
import Footer2 from '../../section/Footer';
import Manage from '../../section/Manage';
import Server2 from '../../section/Server2';
import Refund2 from '../../section/Refund2';
import Question from '../../section/Question';
import Logo from '../../section/Logo';
import Testimonial2 from '../../section/Testimonial2';
import Counter from '../../section/Counterclean';
import Package2 from '../../section/Package2';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 = "/images/background/subheader.jpg";  // Corrected path
const bgImage1 = "/images/background/1.jpg";  // Corrected path for bgImage1

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
          <Parallax bgImage={image1} strength={300}>
            <Hometop />
          </Parallax>
        </section>

        {/* testimonial */}
        <section id="Testimonial" className="no-bottom">
          <Testimonial2 />
        </section>

      {/* counter */}
        <section id="Counter" className="no-bottom">
          <Counter />
        </section>

        {/* package */}
        <section id="Package" className="">
          <Package2 />
        </section>

        {/* manage */}
        <section id="Manage" className="p-0">
          <Manage />
        </section>

        {/* server */}
        <section id="Server" className="p-0">
          <Server2 />
        </section>

        {/* refund */}
        <section id="Refund" className="p-0">
          <Refund2 />
        </section>

        {/* question */}
        <section id="Question" className="">
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
