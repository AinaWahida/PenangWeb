import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-column">
                    <h3>About Penang</h3>
                    <p>
                        Discover the rich culture, history, and attractions of Penang. From delicious food to scenic views, Penang has something for everyone.
                    </p>
                </div>

                {/* Social Media Section */}
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/penang.visit/?hl=en" target="_blank" rel="noreferrer">
                            <img src={require("./components/images/insta.png")} alt="Instagram" />
                        </a>
                        <a href="https://www.tiktok.com/@visitpenang?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer">
                            <img src={require("./components/images/tiktok.png")} alt="TikTok" />
                        </a>
                        <a href="https://www.threads.net/@penang.visit?xmt=AQGzIAXVkeplECnaHBmKuFaDbc1R-uxOfK-C0pEwOMQ6S94" target="_blank" rel="noreferrer">
                            <img src={require("./components/images/twit.png")} alt="Twitter"/>
                        </a>
                        <a href="https://www.facebook.com/visitpenang/" target="_blank" rel="noreferrer">
                            <img src={require("./components/images/facebook.png")} alt="Facebook"/>
                        </a>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Email: info@visitpenang.com</li>
                        <li>Phone: +60 123-456-789</li>
                        <li>Address: Penang, Malaysia</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Visit Penang. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
