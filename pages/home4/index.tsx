import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Hometop from '../../section/home4';
import Footer from '../../section/Footer';
import Counter from '../../section/Counter';
import Package2 from '../../section/Package2';
import Manage from '../../section/Manage';
import Server from '../../section/Server2';
import Refund from '../../section/Refund';
import Question from '../../section/Question';
import Logo from '../../section/Logo';
import Testimonial from '../../section/Testimonial3';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../../images/background/6.jpg";
const bgImage1 = "../../images/background/1.jpg";  


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
      <section id="home" className="p-0">
        <Parallax bgImage={image1} strength={300}>  
          <Hometop/>
        </Parallax>
      </section>

     {/* counter */}
     <section id="counter" className="no-bottom">
       <Counter/>
     </section>


    {/* package */}
    <section id="package">
      <Package2 />
    </section>


     {/* manage */}
     <section id="manage" className="no-top">
       <Manage/>
     </section>

     {/* server */}
     <section id="server" className="no-top">
      <Parallax bgImage={bgImage1} strength={50}>  
        <Server/>
       </Parallax>
     </section>
     
      {/* testimonial */}
      <section id="testimonial" className="p-0">
       <Testimonial/>
     </section>

     {/* refund */}
     <section id="refund" className="p-0">
       <Refund/>
     </section>


      {/* question */}
      <section id="question">
       <Question/>
     </section>

     {/* logos */}
     <section id="logos" className="no-top">
       <Logo/>
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
