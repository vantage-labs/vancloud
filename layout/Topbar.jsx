import React from 'react';
import Link from 'next/link';

const Topbar = () => {
    return(
        <div id="topbar">
            <div className="container">
                <div className="topbar-left xs-hide">
                    <span className="topbar-widget">
                        <a href="#">Get Free Shared Hosting!</a>
                    </span>
                </div>
            
                <div className="topbar-right">
                    <div className="topbar-widget">
                        <Link href="/#"><i className="fa fa-phone"></i>+208 333 9296</Link>
                    </div>
                    <div className="topbar-widget">
                        <Link href="/#"><i className="fa fa-envelope"></i>support@hostco.com</Link>
                    </div>
                </div>  
                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default Topbar;