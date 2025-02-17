import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Refund from '../../section/Refund2';
import Footer from '../../section/Footer';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const Image1 = "../../images/background/9.jpg";  

const GlobalStyles = createGlobalStyle`
  
`;

export default function Domain() {
  const formRef = useRef(null); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const form = formRef.current;

    if (form) {
      console.log('Form submitted:', new FormData(form)); 
      form.submit();
    }
  };

  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
      setOpenSection(openSection === section ? null : section);
  };

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
      <Parallax bgImage={Image1} strength={300}>  
      <section id="help" className="no-bg">
        <div className="center-y relative text-center">
              <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 offset-md-2 text-center">
                        <div className="spacer-double sm-hide"></div>
                        <h2>Transfer Your Domain</h2>
                        <form
                              ref={formRef}
                              action="#"
                              className="row"
                              id="form_sb"
                              method="post"
                              name="form_sb"
                              data-wow-delay="1.25s"
                              onSubmit={handleSubmit}
                            >
                            <div className="col">
                                <div className="spacer-10"></div>
                                <input className="form-control" id='domain_name' name='domain_name' placeholder="enter domain name you want to transfer" type='text'/> 
                                  <button
                                      type="submit"
                                      id="btn-submit"
                                      className="btn-submit"
                                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                    >
                                    <i className="arrow_right"></i>
                                  </button>
                                <div className="clearfix"></div>
                            </div>
                        </form>
                        <div className="spacer-20"></div>
                        <p>Looking for a new domain name? <Link href="/domain-transfer">Click here</Link></p>
                    </div>
                </div>
              </div>
          </div>
      </section>
      </Parallax>

      {/* icons */}
      <section id="section-icons">
       <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 text-center">
                                    <i className="icon-alarmclock de-icon mb20"></i>
                                    <h4>No Time Lost</h4>
                                    <p className="d-small">Lorem ipsum laborum nulla deserunt exercitation eiusmod ex in eiusmod culpa aliqua amet.</p>
                                </div>
                                <div className="col-lg-4 col-md-4 text-center">
                                    <i className="icon-refresh de-icon mb20"></i>
                                    <h4>Stay Online</h4>
                                    <p className="d-small">Lorem ipsum laborum nulla deserunt exercitation eiusmod ex in eiusmod culpa aliqua amet.</p>
                                </div>
                                <div className="col-lg-4 col-md-4 text-center">
                                    <i className="icon-cloud de-icon mb20"></i>
                                    <h4>Daily Backup</h4>
                                    <p className="d-small">Lorem ipsum laborum nulla deserunt exercitation eiusmod ex in eiusmod culpa aliqua amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </section>

      {/* steps */}
      <section id="section-steps" className="no-top">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 offset-lg-3 text-center">
                      <h2>Simple steps to transfer your domain</h2>
                      <div className="spacer-20"></div>
                  </div>
                  <div className="col-md-12 wow fadeInUp">
                      <div className="container-timeline">
                          <ul>
                              <li>
                                  <h4>Add Domain Transfer Request</h4>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                              </li>
                              <li>
                                  <h4>Authorize the Transfer</h4>
                                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                              </li>
                              <li>
                                  <h4>Accept Transfer</h4>
                                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* features */}
      <section id="section-features" className="no-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 text-center">
                            <h2>9 reasons to use our domain transfer service</h2>
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                    <div className="row g-custom-x">
                            <div className="col-md-4 offset-md">
                                <ul className="ul-style-2 s2">                
                                    <li><h4>Easy to use control panel</h4>Nulla sunt aliqua est ex in sint duis culpa officia consequat labore reprehenderit esse culpa quis sed ut esse nulla id fugiat officia minim elit ad laboris.</li>
                                    <li><h4>24/7 customer support</h4>Nulla sunt aliqua est ex in sint duis culpa officia consequat labore reprehenderit esse culpa quis sed ut esse nulla id fugiat officia minim elit ad laboris.</li>
                                    <li><h4>Easy to manage</h4>Nulla sunt aliqua est ex in sint duis culpa officia consequat labore reprehenderit esse culpa quis sed ut esse nulla id fugiat officia minim elit ad laboris.</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="ul-style-2 s2">  
                                    <li><h4>Simple fast website</h4>Nulla sunt aliqua est ex in sint duis culpa officia consequat labore reprehenderit esse culpa quis sed ut esse nulla id fugiat officia minim elit ad laboris.</li>
                                    <li><h4>Full Control Your Domain</h4>Nulla sunt aliqua est ex in sint duis culpa officia consequat labore reprehenderit esse culpa quis sed ut esse nulla id fugiat officia minim elit ad laboris.</li>
                                    <li><h4>No tech skills required</h4>Nulla sunt aliqua est ex in sint duis culpa officia consequat labore reprehenderit esse culpa quis sed ut esse nulla id fugiat officia minim elit ad laboris.</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="ul-style-2 s2">  
                                    <li><h4>Always up to date</h4>Nulla sunt aliqua est ex in sint duis culpa officia consequat labore reprehenderit esse culpa quis sed ut esse nulla id fugiat officia minim elit ad laboris.</li>
                                    <li><h4>30-day money back guarantee</h4>Nulla sunt aliqua est ex in sint duis culpa officia consequat labore reprehenderit esse culpa quis sed ut esse nulla id fugiat officia minim elit ad laboris.</li>
                                    <li><h4>Bulk discounts</h4>Nulla sunt aliqua est ex in sint duis culpa officia consequat labore reprehenderit esse culpa quis sed ut esse nulla id fugiat officia minim elit ad laboris.</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </section>

      {/* faq */}
      <section id="section-faq" className="no-top">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2>Frequently asked questions</h2>
                    <div className="spacer-20"></div>
                </div>
            </div>
            <div className="row g-custom-x">
                <div className="col-md-6 wow fadeInUp">
                    <div className="accordion secondary">
                        <div className="accordion-section">
                            <div 
                                className={`accordion-section-title ${openSection === 'accordion-1' ? 'open' : ''}`}
                                onClick={() => toggleSection('accordion-1')}
                                >
                                How do I get started with web hosting?
                            </div>
                            
                            <div className={`accordion-section-content ${openSection === 'accordion-1' ? 'open' : ''}`} id="accordion-1">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                            </div>
                            
                            <div 
                                className={`accordion-section-title ${openSection === 'accordion-2' ? 'open' : ''}`}
                                onClick={() => toggleSection('accordion-2')}
                                >
                                What is the difference for each plan?
                            </div>

                                <div className={`accordion-section-content ${openSection === 'accordion-2' ? 'open' : ''}`} id="accordion-2">
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                </div>

                            <div 
                                className={`accordion-section-title ${openSection === 'accordion-3' ? 'open' : ''}`}
                                onClick={() => toggleSection('accordion-3')}
                                >
                                What kind of web hosting do I need?
                            </div>
                            
                                <div className={`accordion-section-content ${openSection === 'accordion-3' ? 'open' : ''}`} id="accordion-3">
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 wow fadeInUp">
                    <div className="accordion secondary">
                        <div className="accordion-section">
                            <div 
                                className={`accordion-section-title ${openSection === 'accordion-4' ? 'open' : ''}`}
                                onClick={() => toggleSection('accordion-4')}
                                >
                                Why do I need a domain name?
                            </div>
                            
                                <div className={`accordion-section-content ${openSection === 'accordion-4' ? 'open' : ''}`} id="accordion-4">
                                    <p>A domain name serves as your unique online identity. It allows you to create a recognizable and memorable brand for your website or business. Having a domain name makes it easier for users to find and remember your website.</p>
                                </div>
                           

                            <div 
                                className={`accordion-section-title ${openSection === 'accordion-5' ? 'open' : ''}`}
                                onClick={() => toggleSection('accordion-5')}
                                >
                                How is my website protected from hackers?
                            </div>
                           
                                <div className={`accordion-section-content ${openSection === 'accordion-5' ? 'open' : ''}`} id="accordion-5">
                                    <p>Regularly update your website&apos;s software, including the content management system (CMS), plugins, themes, and any other applications used. Updates often include security patches that address vulnerabilities that could be exploited by hackers.</p>
                                </div>
                          

                            <div 
                                className={`accordion-section-title ${openSection === 'accordion-6' ? 'open' : ''}`}
                                onClick={() => toggleSection('accordion-6')}
                                >
                                How do I back up my website?
                            </div>
                            
                                <div className={`accordion-section-content ${openSection === 'accordion-6' ? 'open' : ''}`} id="accordion-6">
                                    <p>Our hosting has backup and disaster recovery mechanisms in place to safeguard data in the event of data loss, hardware failures, or disasters. Regular backups and redundant storage systems help ensure data integrity and availability.</p>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
