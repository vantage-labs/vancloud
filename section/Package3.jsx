import React, { useState } from "react";


const Package3 = () => {
    //switch
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
    };
    const switchClassName = isChecked ? 'switch checked' : 'switch';
    const otherElementClassName = isChecked ? 'other-element active' : 'other-element';

    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="text-center">
                            <h5 className="s2">Hosting Plan</h5>
                            <h2>Choose Perfect <span className="id-color">Web Hosting</span> Package For You</h2>
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <div className="switch-set">
                            <div>Monthly Plan</div>
                            <div>
                                {/* <input id="sw-1" className="switch" type="checkbox" /> */}
                                <input
                                  id="sw-1"
                                  className={switchClassName}
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={handleToggle}
                                />
                            </div>
                            <div>Yearly Plan</div>
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                </div>
                <div className="row de_pricing-tables shadow-soft g-0">
                    {/* Starter Plan */}
                    <div className="col-xl-3 col-lg-6"> 
                        <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                            <div className="d-head">
                                <h3>Starter</h3>
                                <p>Ideal solution for beginners.</p>
                            </div>
                            <div className="d-price">
                                <h4 className="opt-1">$3.59<span>/mo</span></h4>
                                <h4 className="opt-2">$2.59<span>/mo</span></h4>
                                <p>Normally <s>$9.99</s></p>
                            </div>
                            <div className="d-action">
                                <a href="#" className="btn-main opt-1 w-100">Get Monthly Plan</a>
                                <a href="#" className="btn-main opt-2 w-100">Get Yearly Plan</a>
                                <p>Auto re-news at regular rate</p>
                            </div>
                            <div className="d-group">
                                <h4>Top Features</h4>
                                <ul className="d-list">
                                    <li>1 Website</li>
                                    <li>10 GB SSD Storage</li>
                                    <li>Custom Themes</li>
                                    <li>24/7 Customer Support</li>
                                </ul>
                            </div>
                            <div className="d-group">
                                <h4>Also Includes</h4>
                                <ul className="d-list">
                                    <li>Free Domain - 1 year</li>
                                    <li>Free CDN Included</li>
                                    <li>Free SSL for the 1st year</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Plus Plan */}
                    <div className="col-xl-3 col-lg-6">
                        <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                            <div className="d-head">
                                <h3>Plus</h3>
                                <p>For those who need to run multiple sites.</p>
                            </div>
                            <div className="d-price">
                                <h4 className="opt-1">$5.59<span>/mo</span></h4>
                                <h4 className="opt-2">$3.59<span>/mo</span></h4>
                                <p>Normally <s>$15.99</s></p>
                            </div>
                            <div className="d-action">
                                <a href="#" className="btn-main opt-1 w-100">Get Monthly Plan</a>
                                <a href="#" className="btn-main opt-2 w-100">Get Yearly Plan</a>
                                <p>Auto re-news at regular rate</p>
                            </div>
                            <div className="d-group">
                                <h4>Top Features</h4>
                                <ul className="d-list">
                                    <li>Unlimited Websites</li>
                                    <li>20 GB SSD Storage</li>
                                    <li>Custom Themes</li>
                                    <li>24/7 Customer Support</li>
                                </ul>
                            </div>
                            <div className="d-group">
                                <h4>Also Includes</h4>
                                <ul className="d-list">
                                    <li>Free Domain - 1 year</li>
                                    <li>Free CDN Included</li>
                                    <li>Free SSL Certificate</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Deluxe Plan */}
                    <div className="col-xl-3 col-lg-6">
                        <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                            <div className="d-recommend">Recommended</div>
                            <div className="d-head">
                                <h3>Deluxe</h3>
                                <p>Unlimited sites with automated backup.</p>
                            </div>
                            <div className="d-price">
                                <h4 className="opt-1">$8.59<span>/mo</span></h4>
                                <h4 className="opt-2">$5.59<span>/mo</span></h4>
                                <p>Normally <s>$24.99</s></p>
                            </div>
                            <div className="d-action">
                                <a href="#" className="btn-main opt-1 w-100">Get Monthly Plan</a>
                                <a href="#" className="btn-main opt-2 w-100">Get Yearly Plan</a>
                                <p>Auto re-news at regular rate</p>
                            </div>
                            <div className="d-group">
                                <h4>Top Features</h4>
                                <ul className="d-list">
                                    <li>Unlimited Websites</li>
                                    <li>40 GB SSD Storage</li>
                                    <li>Custom Themes</li>
                                    <li>24/7 Customer Support</li>
                                </ul>
                            </div>
                            <div className="d-group">
                                <h4>Also Includes</h4>
                                <ul className="d-list">
                                    <li>Free Domain - 1 year</li>
                                    <li>Free CDN Included</li>
                                    <li>Free SSL Certificate</li>
                                    <li>Free Domain Privacy</li>
                                    <li>Free Automated Backup</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Ultimate Plan */}
                    <div className="col-xl-3 col-lg-6">
                        <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                            <div className="d-head">
                                <h3>Ultimate</h3>
                                <p>Best performance with optimized CPU resources.</p>
                            </div>
                            <div className="d-price">
                                <h4 className="opt-1">$15.59<span>/mo</span></h4>
                                <h4 className="opt-2">$10.59<span>/mo</span></h4>
                                <p>Normally <s>$36.99</s></p>
                            </div>
                            <div className="d-action">
                                <a href="#" className="btn-main opt-1 w-100">Get Monthly Plan</a>
                                <a href="#" className="btn-main opt-2 w-100">Get Yearly Plan</a>
                                <p>Auto re-news at regular rate</p>
                            </div>
                            <div className="d-group">
                                <h4>Top Features</h4>
                                <ul className="d-list">
                                    <li>Unlimited Websites</li>
                                    <li>100 GB SSD Storage</li>
                                    <li>Custom Themes</li>
                                    <li>24/7 Customer Support</li>
                                    <li>Optimized CPU Resources</li>
                                </ul>
                            </div>
                            <div className="d-group">
                                <h4>Also Includes</h4>
                                <ul className="d-list">
                                    <li>Free Domain - 1 year</li>
                                    <li>Free CDN Included</li>
                                    <li>Free SSL Certificate</li>
                                    <li>Free Domain Privacy</li>
                                    <li>Free Automated Backup</li>
                                    <li>Free Dedicated IP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
    );
};

export default Package3;
