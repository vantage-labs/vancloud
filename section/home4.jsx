import React from 'react';
import Image from 'next/image';

import google from '../public/images/svg/google_icon.svg';
import facebook from '../public/images/svg/facebook_icon.svg';

const Home4 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const domainName = document.getElementById('domain_name').value;
    console.log('Domain Name Submitted:', domainName);
  };

  return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-sm-30">
            <h1>Premium hosting for everyone, small or large</h1>
            <p>
              Nostrud ea amet pariatur et sed esse nisi cupidatat tempor culpa enim cupidatat dolore aliquip
              dolor in dolor cupidatat aliqua.
            </p>
            <a className="btn-main" href="#">Get Started</a>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="spacer-single sm-hide"></div>
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
            <div className="spacer-single sm-hide"></div>
          </div>
        </div>
      </div>
  );
};

export default Home4;
