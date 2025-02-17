import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Package from '../../section/Package-Pt';
import PackageDark from '../../section/Package-Pt-Dark';
import Package4 from '../../section/Package4';
import Package4Dark from '../../section/Package4-Dark';
import Package5 from '../../section/Package5';
import Package5Dark from '../../section/Package5-Dark';
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
                              <h1>Pricing Tables</h1>
                          </div>
                          <div className="col-lg-6 offset-lg-3">
                          </div>
                      </div>
                  </div>
              </div>
      </section>
      </Parallax>


      {/* package */}
     <section>
        <Package/>
     </section>

     {/* package Dark */}
     <section className="pricing-1-dark text-light  ">
        <PackageDark/>
     </section>

     {/* package 4 */}
     <section>
        <Package4/>
     </section>

      {/* package 4 */}
      <section className="pricing-1-dark text-light">
        <Package4Dark/>
     </section>

      {/* package 5*/}
      <section id="section-pricing2">
        <Package5/>
     </section>

     {/* package 5 Dark*/}
     <section className="pricing-1-dark text-light">
        <Package5Dark/>
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
