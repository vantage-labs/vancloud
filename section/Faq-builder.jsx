import React, { useState } from "react";

const Question = () => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2>Website Builder FAQ</h2>
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
                                        <p>Regularly update your website's software, including the content management system (CMS), plugins, themes, and any other applications used. Updates often include security patches that address vulnerabilities that could be exploited by hackers.</p>
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
    );
}

export default Question;
