import React from 'react';
import Image from 'next/image';

import Img1 from '../public/images/misc/website-builder.png';

const Home2 = () => {
    return (
      
            <div className="container">
                    <div className="row g-custom-x align-items-center">
                        <div className="col-md-5">
                            <h1>The easiest way to build your website</h1>
                            <p>Our intelligent builder has all features to create professional website in no time. Nisi aliqua velit do sint sint culpa minim est do cillum irure et commodo reprehenderit.</p>
                            <ul className="ul-style-2 mb30">
                                <li><h4>Simple Customization</h4></li>
                                <li><h4>Drag-and-Drop Website Builder</h4></li>
                                <li><h4>Huge Design Library</h4></li>
                                <li><h4>Real-Time SEO Checker</h4></li>
                            </ul>
                        </div>
                        <div className="col-md-7">
                            <Image src={Img1} className="lazy img-fluid anim-up-down" alt="website-builder"/>
                        </div>
                    </div>
                </div>
       
    );
}

export default Home2;
