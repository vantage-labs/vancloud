import React, { useEffect } from 'react';
import Head from 'next/head';
import { Parallax } from "react-parallax";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Cookies from '../../section/Cookies';
import Footer from '../../section/Footer';
import Package from '../../section/Package-vps';
import Easystep from '../../section/Easystep';
import Manage from '../../section/Manage';
import Refund from '../../section/Refund';
import Question from '../../section/Question';
import Testimonial from '../../section/Testimonial2';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const Image1 = "../../images/background/subheader.jpg";

const GlobalStyles = createGlobalStyle``;

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
          <Topbar />
          <Navbar />
        </header>

        {/* home */}
        <Parallax bgImage={Image1} strength={300}>
          <section id="subheader" className="no-bg">
            <div className="center-y relative text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>VPS Hosting</h1>
                  </div>
                  <div className="col-lg-6 offset-lg-3">
                    <p className="lead">For power and flexibility you need.</p>
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
          <Testimonial />
        </section>

        {/* question */}
        <section id="question">
          <Question />
        </section>

        {/* refund */}
        <section id="refund" className="p-0">
          <Refund />
        </section>

        {/* footer */}
        <section id="footer" className="p-0">
          <Footer />
        </section>

        <Cookies />
      </div>

      <ScrollToTopBtn />
    </>
  );
}
