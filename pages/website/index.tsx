import React, { useEffect } from 'react';
import Head from 'next/head';
import { Parallax } from "react-parallax";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Hometop from '../../section/Topwebsite';
import Template from '../../section/Template';
import Steps from '../../section/Steps';
import Question from '../../section/Faq-builder';
import Footer2 from '../../section/Footer';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 = "/images/background/subheader.jpg"; 

const GlobalStyles = createGlobalStyle`
  /* Add your global styles here */
`;

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('mainpreloader');
      if (loader) {
        setTimeout(() => {
          loader.classList.add("fadeOut");
          loader.style.display = 'none';
        }, 1000);
      }
    }
  }, []);

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

        {/* template */}
        <section id="template" className="">
          <Template />
        </section>

        {/* steps */}
        <section id="steps" className="no-top">
          <Steps />
        </section>

        {/* question */}
        <section id="question" className="no-top">
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
