import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Hometop from '../../section/home5';
import Footer from '../../section/Footer';
import Manage from '../../section/Manage';
import Server from '../../section/Server2';
import Refund from '../../section/Refund';
import Question from '../../section/Question';
import Logo from '../../section/Logo';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../../images/background/7.jpg";
const bgImage1 = "../../images/background/1.jpg";  


const GlobalStyles = createGlobalStyle`
  .logo-main {
    display: none;
    &.white {
      display: block;
    }
  }

  #header-wrap.sticky {
    .logo-main {
      display: block;
      &.white {
        display: none;
      }
      &.green{
        display: none;
      }
    }
  }
  @media only screen and (max-width: 992px){
  #header-wrap.sticky {
    .logo-main{
      display: none;
      &.white{
        display: none !important;
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
          }, 1000)
      }
    }, []);

  /* elements div for loader */
  const divs = Array.from({ length: 8 });

  return (
    <>
    <Head>
      <title>vntagelabs - Modern Web Hosting & WHMCS Template</title>
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
     <section id="home" className="p-0 text-light">
        <Parallax className="top-80" bgImage={image1} strength={300}>  
          <Hometop/>
        </Parallax>
      </section>

     {/* manage */}
     <section id="manage" className="no-bottom">
       <Manage/>
     </section>

     {/* server */}
     <section id="server" className="no-bottom">
      <Parallax bgImage={bgImage1} strength={50}>  
        <Server/>
       </Parallax>
     </section>
     
    {/* question */}
    <section id="question">
     <Question/>
    </section>

    {/* logos */}
    <section id="logos" className="no-top">
     <Logo/>
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
