import React, { useState, useEffect } from 'react';

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const handleAccept = (e) => {
        e.preventDefault(); 
        setFadeOut(true); 
    };

    useEffect(() => {
        if (fadeOut) {
            const timeout = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [fadeOut]);

    return (   
            <div id="cookit" className={fadeOut ? 'fade-out' : ''}>
                <div id="cookit-container">
                    <p className="cookit-message">
                        This website uses <b>cookies</b> to ensure you get the best experience on our website.
                    </p>
                    <a className="cookit-link" href="#" target="_blank">Learn more</a>
                    <a className="cookit-button" href="#" onClick={handleAccept}>I accept</a>
                </div>
            </div>
    );
}

export default Cookies;
