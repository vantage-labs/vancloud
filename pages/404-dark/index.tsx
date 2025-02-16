import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

import img1 from '../../public/images/background/dark-2.jpg';
import img2 from '../../public/images/misc/404.png';


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


      {/* menu */}
      <div className="maincontent">

        {/* home */}
        <section id="section-hero" className="comingsoon pt50 pb50 vertical-center dark-scheme" aria-label="section">
            <Image src={img1} className="bg-absolute" alt="404"/>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1>Something&apos;s missing.</h1>
                        <p>Looks like this page is missing. Don&apos;t worry though, our best team is on the case.</p>
                        <Link href="/" className="btn-main">Go Back</Link>
                        <div className="spacer-10"></div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <h1 className="s2">
                            <span className="c1">404</span>
                            <span className="spacer-single"></span>
                            <span className="c3">Not Found</span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>

  </div>
  </>
  )
}