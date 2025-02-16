import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { FormEvent } from 'react';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Footer from '../../section/Footer';
import ScrollToTopBtn from '../../layout/ScrollToTop';

const Image1 = "../../images/background/subheader.jpg";  

export default function Contact() {
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

  /* emailjs */
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault(); // Prevent the form's default behavior

    if (!formRef.current) return; // Ensure the form is available

    emailjs
      .sendForm(
        'gmail', 
        'template_csfdEZiA', 
        formRef.current, 
        'user_zu7p2b3lDibMCDutH5hif'
      )
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setError(false);
      })
      .catch((error) => {
        console.error(error.text);
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <>
    <Head>
      <title>Hostco - Modern Web Hosting & WHMCS Template</title>
    </Head>

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
                          <div className="col-md-12 text-center">
                              <h1>Contact Us</h1>
                          </div>
                          <div className="col-lg-6 offset-lg-3">
                          </div>
                      </div>
                  </div>
              </div>
      </section>
      </Parallax>

      {/* contact */}
      <section aria-label="contact">
        <div className="container">
            <div className="row g-custom-x">

              <div className="col-lg-8 mb-sm-30">
                <div className="de-map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475269.815727967!2d144.55770109544036!3d-37.94626839233025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sid!4v1635229076061!5m2!1sen!2sid"  allowFullScreen={true} loading="lazy"></iframe>
                </div>
              
              <div className="spacer-30"></div>

              <h3>Do you have any question?</h3>
              
              <form 
                ref={formRef}
                onSubmit={sendEmail} 
                id="contact_form" 
                className="form-border"
              >
                <div className="row">
                  <div className="col-md-4 mb10">
                    <div className="field-set">
                      <input 
                        type="text" 
                        name="Name" 
                        id="name" 
                        className="form-control" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb10">
                    <div className="field-set">
                      <input 
                        type="email" 
                        name="Email" 
                        id="email" 
                        className="form-control" 
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb10">
                    <div className="field-set">
                      <input 
                        type="text" 
                        name="phone" 
                        id="phone" 
                        className="form-control" 
                        placeholder="Your Phone" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div className="field-set mb20">
                  <textarea 
                    name="message" 
                    id="message" 
                    className="form-control" 
                    placeholder="Your Message" 
                    required
                  ></textarea>
                </div>

                <div className="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>

                <div id="submit" className="mt20">
                  <input 
                    type="submit" 
                    id="send_message" 
                    value="Send Message" 
                    className="btn-main" 
                  />
                </div>

                {success && (
                  <div id="success_message" className="success">
                    Your message has been sent successfully. Refresh this page if you want to send more messages.
                  </div>
                )}

                {error && (
                  <div id="error_message" className="error">
                    Sorry, there was an error sending your form.
                  </div>
                )}
              </form>

            </div>
            
            <div className="col-lg-4">
              <div className="box-contact">
                <h4>US Office</h4>
                <address className="s1">
                  <span><i className="id-color fa fa-map-marker fa-lg"></i>08 W 36th St, New York, NY 10001</span>
                  <span><i className="id-color fa fa-phone fa-lg"></i>+1 333 9296</span>
                  <span><i className="id-color fa fa-envelope-o fa-lg"></i><a href="mailto:contact@example.com">contact@example.com</a></span>
                  <span><i className="id-color fa fa-file-pdf-o fa-lg"></i><a href="#">Download Brochure</a></span>
                </address>
              </div>
              <div className="box-contact">
                <h4>AU Office</h4>
                <address className="s1">
                  <span><i className="fa fa-map-marker fa-lg"></i>100 Mainstreet Center, Sydney</span>
                  <span><i className="fa fa-phone fa-lg"></i>+61 333 9296</span>
                  <span><i className="fa fa-envelope-o fa-lg"></i><a href="mailto:contact@example.com">contact@example.com</a></span>
                  <span><i className="fa fa-file-pdf-o fa-lg"></i><a href="#">Download Brochure</a></span>
                </address>
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
