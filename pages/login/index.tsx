import React, { useEffect } from 'react';
import Image from 'next/image'; 
import { Parallax } from 'react-parallax';
import Topbar from '../../layout/Topbar';
import Navbar from '../../layout/Navbar';
import Hometop from '../../section/Login';
import Footer from '../../section/Footer';
import ScrollToTopBtn from '../../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const Image1 = "../../images/background/6.jpg";  

import google from '../../public/images/svg/google_icon.svg';
import facebook from '../../public/images/svg/facebook_icon.svg';


const GlobalStyles = createGlobalStyle`

h4 {
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 26px;
}

.form-border {
    input[type="text"],
    textarea,
    input[type="email"],
    input[type="password"],
    input[type="date"],
    select {
        padding: 8px;
        margin-bottom: 10px;
        border: solid 2px #eeeeee;
        background: rgba(0, 0, 0, 0.025);
        border-radius: 2px;
        height: auto;
        box-shadow: none;
        color: #333;
    }
}

.title-line {
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 14px;
}

.title-line:before, .title-line:after {
  content: "";
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, .2);
}

a.btn-sc {
  width: 100%;
  display: inline-block;
  font-family: var(--title-font);
  font-weight: bold;
  padding: 6px 0;
  font-size: 14px;
  color: #222;
  border-radius: 5px;
  background: #f2f2f2;
  text-decoration: none;
  img {
    width: 20px;
    margin-top: -4px;
    margin-right: 8px;
  }
}
.form-border input[type="text"], .form-border textarea, .form-underline input[type="email"], .form-border input[type="password"], .form-border input[type="date"], .form-border select {
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border: solid 2px #eeeeee;
  background: rgba(0, 0, 0, .025);
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  height: auto;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  color: #333;
}
.react-parallax-content{
  .padding40.rounded-3.shadow-soft.text-center{
    background: #fff;
  }
}
`;



export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('mainpreloader');
      if (loader) {
        setTimeout(() => {
          loader.classList.add('fadeOut');
          loader.style.display = 'none';
        }, 1500);
      }
    }
  }, []);

  // Elements for loader animation
  const divs = Array.from({ length: 8 });

  return (
    <>

      {/* loader */}
      <div id="mainpreloader">
        <div id="de-loader" className="fadeOut">
          <div className="lds-roller">
            {divs.map((_, index) => (
              <div key={index} />
            ))}
          </div>
        </div>
      </div>

   <GlobalStyles />


      {/* menu */}
      <div className="maincontent">
        <header id="header-wrap">
          <Topbar />
          <Navbar />
        </header>

        {/* home */}
        <section id="home" className="p-0 vh">
          <Parallax bgImage={Image1} strength={50}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 offset-lg-4">
                  <div className="spacer-double sm-hide"></div>
                    <div className="padding40 rounded-3 shadow-soft text-center">
                      <h4>Buy a hosting package<br />and get free domain!</h4>
                      <div className="spacer-10"></div>
                        <form id="form_register" className="form-border" method="post" action="email.php">
                          <div className="field-set">
                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                          </div>
                          <div className="field-set">
                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                          </div>
                          <div id="submit">
                            <input type="submit" id="send_message" value="Register" className="btn-main btn-fullwidth rounded-3" />
                          </div>
                        </form>
                        <div className="title-line">Or&nbsp;sign&nbsp;up&nbsp;with</div>
                        <div className="row g-2">
                          <div className="col-lg-6">
                            <a className="btn-sc btn-fullwidth mb10" href="#">
                              <Image src={google} className="img-fluid" alt="imgmenu"/>
                              Google</a>
                          </div>
                          <div className="col-lg-6">
                            <a className="btn-sc btn-fullwidth mb10" href="#">
                              <Image src={facebook} className="img-fluid" alt="imgmenu"/>
                              Facebook</a>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
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