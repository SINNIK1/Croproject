import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="social-icons"><p>Follow us on social media:</p>
                <a href="https://www.facebook.com">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;