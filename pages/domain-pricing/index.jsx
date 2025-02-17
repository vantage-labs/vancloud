import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Footer from '../../section/Footer';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const Image1 = "../../images/background/subheader.jpg";  

const GlobalStyles = createGlobalStyle`
  
`;

export default function Domain() {
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
    <div className="home">
      <header id="header-wrap">
        <Topbar/>
        <Navbar />
      </header>

      {/* home */}
      <Parallax bgImage={Image1} strength={300} className="w-100">  
      <section id="help" className="no-bg">
        <div className="center-y relative text-center">
              <div className="container">
                <div className="row">
                    <div className="spacer-single"></div>
                    <div className="col-md-12 text-center">
                      <h1>Domain Pricing</h1>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
          </div>
      </section>
      </Parallax>

      {/* pricing */}
      <section id="pricing" className="no-top mt-70">
       <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <table className="table table-pricing text-center">
                      <thead>
                        <tr>
                          <th scope="col">Domain</th>
                          <th scope="col">Register</th>
                          <th scope="col">Renew</th>
                          <th scope="col">Transfer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th><span className="lbl">Domain</span>.com</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.net</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.org</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.info</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.info</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.club</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.email</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.guru</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.today</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.xyz</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.co</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.asia</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.biz</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.mobi</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.name</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th><span className="lbl">Domain</span>.bz</th>
                          <td><span className="lbl">Register</span>$4.99</td>
                          <td><span className="lbl">Renew</span>$8.99</td>
                          <td><span className="lbl">Transfer</span>$6.99</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>                            
        </div>
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
