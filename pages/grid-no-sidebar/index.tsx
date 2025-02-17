import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import Link from 'next/link';
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Footer from '../../section/Footer';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const Image1 = "../../images/background/subheader.jpg";  

import imgblog1 from '../../public/images/news-2/pic-blog-1.jpg';
import imgblog2 from '../../public/images/news-2/pic-blog-2.jpg';
import imgblog3 from '../../public/images/news-2/pic-blog-3.jpg';
import imgblog4 from '../../public/images/news-2/pic-blog-4.jpg';
import imgblog5 from '../../public/images/news-2/pic-blog-5.jpg';
import imgblog6 from '../../public/images/news-2/pic-blog-6.jpg';

import imgthumb1 from '../../public/images/news-thumbnail/pic-blog-1.jpg';
import imgthumb2 from '../../public/images/news-thumbnail/pic-blog-2.jpg';
import imgthumb3 from '../../public/images/news-thumbnail/pic-blog-3.jpg';
import imgthumb4 from '../../public/images/news-thumbnail/pic-blog-4.jpg';

import google from '../../public/images/svg/google_icon.svg';
import facebook from '../../public/images/svg/facebook_icon.svg';

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
      <Parallax bgImage={Image1} strength={300}>  
      <section id="subheader" className="no-bg">
              <div className="center-y relative text-center">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 offset-lg-3">
                              <h1>News & Updates</h1>
                              <p className="lead">Et in deserunt sed consequat culpa laborum ex aliqua labore eiusmod eu consequat cupidatat ut reprehenderit amet magna.</p>
                          </div>
                          <div className="col-lg-6 offset-lg-3">
                          </div>
                      </div>
                  </div>
              </div>
      </section>
      </Parallax>

       {/* news */}
       <section id="section-content" aria-label="section" className="no-top mt-50">
        <div className="container">
            <div className="row gx-5">

                    <div className="col-lg-4">
                    <div className="de-post-type-1">
                        <div className="d-image">
                            <Image src={imgblog1} className="lazy" alt="blog"/>
                        </div>
                        <div className="d-content">
                            
                            <span className="p-tagline">Web Hosting</span>
                            <h4><Link href="#">10 Things the Media Hasn&apos;t Told You About Hosting<span></span></Link></h4>
                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-lg-4">
                    <div className="de-post-type-1">
                        <div className="d-image">
                            <Image src={imgblog2} className="lazy" alt="blog"/>
                        </div>
                        <div className="d-content">
                            
                            <span className="p-tagline">Web Hosting</span>
                            <h4><Link href="#">7 Things Leaders in the Technology Industry Want You to Know<span></span></Link></h4>
                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="de-post-type-1">
                        <div className="d-image">
                            <Image src={imgblog3} className="lazy" alt="blog"/>
                        </div>
                        <div className="d-content">
                            
                            <span className="p-tagline">Web Hosting</span>
                            <h4><Link href="#">Best Practices for Remote Workers in the Hosting Industry<span></span></Link></h4>
                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="de-post-type-1">
                        <div className="d-image">
                            <Image src={imgblog4} className="lazy" alt="blog"/>
                        </div>
                        <div className="d-content">
                            
                            <span className="p-tagline">Web Hosting</span>
                            <h4><Link href="#">Everything You Ever Wanted to Know About Hosting<span></span></Link></h4>
                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="de-post-type-1">
                        <div className="d-image">
                            <Image src={imgblog5} className="lazy" alt="blog"/>
                        </div>
                        <div className="d-content">
                            
                            <span className="p-tagline">Web Hosting</span>
                            <h4><Link href="#">Hosting on a Budget: Our Best Money-Saving Tips<span></span></Link></h4>
                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="de-post-type-1">
                        <div className="d-image">
                            <Image src={imgblog6} className="lazy" alt="blog"/>
                        </div>
                        <div className="d-content">
                            
                            <span className="p-tagline">Web Hosting</span>
                            <h4><Link href="#">Amazon Shoppers Are Obsessed With This Hosting Product<span></span></Link></h4>
                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                        </div>
                    </div>
                    </div>

                    <div className="spacer-single"></div>
                        
                    <div className="col-md-12">
                        <ul className="pagination">
                            <li><Link href="#">Prev</Link></li>
                            <li className="active"><Link href="#">1</Link></li>
                            <li><Link href="#">2</Link></li>
                            <li><Link href="#">3</Link></li>
                            <li><Link href="#">4</Link></li>
                            <li><Link href="#">5</Link></li>
                            <li><Link href="#">Next</Link></li>
                        </ul>
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
