import React from 'react';
import './footer.css';
import { google, facebook, insta, twitter, youtube } from './logos/logos';

const Footer = () => {
    return (
        <div>
            <footer className="site-footer" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="about">
                            <div className="brand">
                                <img src="" alt="Pristine Estates Logo" />
                                <div className="brand-name">
                                    <h1>PRISTINE</h1>
                                    <h1>ESTATES</h1>
                                </div>
                            </div>
                            <p className="text-justify">
                            antraFiesta is the prestigious technical fest of IIIT Nagpur, showcasing innovative projects, workshops, and competitions, fostering creativity and collaboration among students in various fields of technology and engineering.
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Clubs</h6>
                            <ul className="footer-links">
                                <li><a href="/properties/luxury">Luxury Apartments</a></li>
                                <li><a href="/properties/commercial">Commercial Spaces</a></li>
                                <li><a href="/properties/rentals">Rental Properties</a></li>
                                <li><a href="/properties/villas">Exclusive Villas</a></li>
                                <li><a href="/properties/plots">Residential Plots</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Social</h6>
                            <ul className="footer-links">
                                <li><a href="/services/consultation">Property Consultation</a></li>
                                <li><a href="/services/valuation">Property Valuation</a></li>
                                <li><a href="/services/legal">Legal Assistance</a></li>
                                <li><a href="/services/mortgage">Mortgage Solutions</a></li>
                                <li><a href="/services/investment">Real Estate Investment</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Contact Us</h6>
                            <ul className="footer-links">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/terms-of-service">Terms of Service</a></li>
                                <li><a href="/careers">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">
                                &copy; TantraFiesta 2024, Website created and Maintained by <a href="#">Students</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><img src={facebook} alt="Facebook" /></a></li>
                                <li><a className="twitter" href="#"><img src={twitter} alt="Twitter" /></a></li>
                                <li><a className="instagram" href="#"><img src={insta} alt="Instagram" /></a></li>
                                <li><a className="youtube" href="#"><img src={youtube} alt="YouTube" /></a></li>
                                <li><a className="google" href="#"><img src={google} alt="Google" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;