import React from 'react';
import './footer.css';
import { faInstagram, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tflogo from "./logos/tflogo.png";

const Footer = () => {
    return (
        <div>
            <footer className="site-footer" id="contact">
                <div class="animation">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
                <div className="hazy">

                </div>
                <div className="fcontainer">
                    <div className="row">
                        <div className="about">
                            <div className="brand">
                                <img className='tf-logo' src={tflogo} alt="TF" />
                                <div className="brand-name">
                                    <a href="/">
                                        <img src="/images/TF name.png" height={350} width={350} alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <p className="text-justify">
                                24-25 October, 2024
                            </p>
                        </div>
                        <div className="sub-foot">
                            <h6>CONTACT US</h6>
                            <ul className="footer-links">
                                <li><a href="mailto:tantrafiesta@iiitn.ac.in">tantrafiesta@iiitn.ac.in</a></li>
                                <li><a href="tel:+919300319597">+91 9300319597</a></li>
                            </ul>
                        </div>
                        <div className="sub-foot">
                            <h6>QUICK LINKS</h6>
                            <ul className="footer-links">
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#events">Events</a></li>
                                <li><a href="/#sponsors">Sponsors</a></li>
                                <li><a href="/#speakers">Speakers</a></li>
                                <li><a href="/team">Teams</a></li>
                            </ul>
                        </div>

                        <div className="sub-foot">
                            <h6>SOCIAL</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="https://www.instagram.com/tantrafiesta/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/tantrafiesta-iiitn/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="fcontainer">
                    <div className="row2">
                        <p className="copyright-text">
                            TantraFiesta 2024 &copy; Website Created and Maintained by <a href="/developers">Students</a>.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;