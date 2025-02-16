import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Cards from '../../section/Card'
import Cards2 from '../../section/Card2'
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
          }, 1500)
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

      <Parallax bgImage={Image1} strength={300}>  
      <section id="subheader" className="no-bg">
              <div className="center-y relative text-center">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12 text-center">
                              <h1>Cards</h1>
                          </div>
                          <div className="col-lg-6 offset-lg-3">
                          </div>
                      </div>
                  </div>
              </div>
      </section>
      </Parallax>
     

     {/* Card */}
     <section>
        <Cards/>
      </section>

      {/* Card2*/}
     <section className="gray">
        <Cards2/>
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
