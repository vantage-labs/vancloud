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

const Image1 = "../../images/background/3.jpg";  

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
      <Parallax bgImage={Image1} strength={300} className="w-100">  
      <section id="help" className="no-bg">
        <div className="center-y relative text-center">
              <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 offset-md-2 text-center">
                        <div className="spacer-double sm-hide"></div>
                        <h2>Help Center</h2>
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
                                <input className="form-control" id='domain_name' name='domain_name' placeholder="type your questions here" type='text'/> 
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
                        <p className="d-small">*eg. domain setup, transfer domain</p>
                    </div>
                </div>
              </div>
          </div>
      </section>
      </Parallax>

      {/* domainfeature */}
      <section id="domainfeature" className="p-0">
       <div className="container">
            <div className="row">
                <div className="clearfix"></div>
                <div className="col-md-3 text-center">
                    <i className="icon-alarmclock de-icon mb20"></i>
                    <h4>Getting Started</h4>
                    <p>Aliquip consequat excepteur non dolor irure ad irure labore ex.</p>
                </div>
                <div className="col-md-3 text-center">
                    <i className="icon-refresh de-icon mb20"></i>
                    <h4>Announcements</h4>
                    <p>Aliquip consequat excepteur non dolor irure ad irure labore ex.</p>
                </div>
                <div className="col-md-3 text-center">
                    <i className="icon-layers de-icon mb20"></i>
                    <h4>Account / Billing</h4>
                    <p>Aliquip consequat excepteur non dolor irure ad irure labore ex.</p>
                </div>
                <div className="col-md-3 text-center">
                    <i className="icon-cloud de-icon mb20"></i>
                    <h4>Technical</h4>
                    <p>Aliquip consequat excepteur non dolor irure ad irure labore ex.</p>
                </div>
            </div>
        </div>
      </section>

     {/* question */}
      <section id="question">
       <div className="container">
        <div className="row g-5">

          <div className="col-lg-6 offset-lg-3 text-center">
              <h2>Search at popular topics.</h2>
              <p className="lead">Sit labore et officia eiusmod tempor officia eiusmod dolor exercitation nulla dolore ut id velit et ut anim.</p>
          </div>

          <div className="col-md-6">
            <div className="box-highlight">
              <div className="heading"><h4>Hosting Plans</h4></div>
                <div className="content">
                    <div className="accordion">
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
                            What is difference for each plan?
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
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-4' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-4')}
                            >
                            Why do I need domain name?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-4' ? 'open' : ''}`} id="accordion-4">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-5' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-5')}
                            >
                            What my website protected from hackers?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-5' ? 'open' : ''}`} id="accordion-5">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-6' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-6')}
                            >
                            How do I backup my website?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-6' ? 'open' : ''}`} id="accordion-6">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                    </div>
                </div>          
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="box-highlight">
              <div className="heading"><h4>DNS and Domains</h4></div>
                <div className="content">
                    <div className="accordion">
                      <div className="accordion-section">
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-7' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-7')}
                            >
                            How do I get started with web hosting?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-7' ? 'open' : ''}`} id="accordion-7">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-8' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-8')}
                            >
                            What is difference for each plan?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-8' ? 'open' : ''}`} id="accordion-8">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-9' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-9')}
                            >
                            What kind of web hosting do I need?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-9' ? 'open' : ''}`} id="accordion-9">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-10' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-10')}
                            >
                            Why do I need domain name?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-10' ? 'open' : ''}`} id="accordion-10">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-11' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-11')}
                            >
                            What my website protected from hackers?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-11' ? 'open' : ''}`} id="accordion-11">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-12' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-12')}
                            >
                            How do I backup my website?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-12' ? 'open' : ''}`} id="accordion-12">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                    </div>
                </div>          
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="box-highlight">
              <div className="heading"><h4>Products and Services</h4></div>
                <div className="content">
                    <div className="accordion">
                      <div className="accordion-section">
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-13' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-13')}
                            >
                            How do I get started with web hosting?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-13' ? 'open' : ''}`} id="accordion-13">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-14' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-14')}
                            >
                            What is difference for each plan?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-14' ? 'open' : ''}`} id="accordion-14">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-15' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-15')}
                            >
                            What kind of web hosting do I need?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-15' ? 'open' : ''}`} id="accordion-15">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-16' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-16')}
                            >
                            Why do I need domain name?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-16' ? 'open' : ''}`} id="accordion-16">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-17' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-17')}
                            >
                            What my website protected from hackers?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-17' ? 'open' : ''}`} id="accordion-17">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-18' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-18')}
                            >
                            How do I backup my website?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-18' ? 'open' : ''}`} id="accordion-18">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                    </div>
                </div>          
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="box-highlight">
              <div className="heading"><h4>SSL and Security</h4></div>
                <div className="content">
                    <div className="accordion">
                      <div className="accordion-section">
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-19' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-19')}
                            >
                            How do I get started with web hosting?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-19' ? 'open' : ''}`} id="accordion-19">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-20' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-20')}
                            >
                            What is difference for each plan?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-20' ? 'open' : ''}`} id="accordion-20">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-21' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-21')}
                            >
                            What kind of web hosting do I need?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-21' ? 'open' : ''}`} id="accordion-21">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-22' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-22')}
                            >
                            Why do I need domain name?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-22' ? 'open' : ''}`} id="accordion-22">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-23' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-23')}
                            >
                            What my website protected from hackers?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-23' ? 'open' : ''}`} id="accordion-23">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div 
                            className={`accordion-section-title ${openSection === 'accordion-24' ? 'open' : ''}`}
                            onClick={() => toggleSection('accordion-24')}
                            >
                            How do I backup my website?
                        </div>
                        <div className={`accordion-section-content ${openSection === 'accordion-24' ? 'open' : ''}`} id="accordion-24">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                    </div>
                </div>          
              </div>
            </div>
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
