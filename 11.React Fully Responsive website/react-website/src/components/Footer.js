import React from "react";
import { Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
              <div className="d-flex flex-column justify-content-center align-items-center pt-3">
                <h3 className="footer-subscription-heading text-center">
                  Join the Adventure newsletter to receive our best vacation deals
                </h3>
                <h6 className="footer-subscription-text">
                        You can unsubscribe at any time
                </h6>
                <div>
                    <form className="footer-form d-flex mt-4">
                        <input 
                          className="footer-input"
                          name="email"
                          type="email"
                          placeholder="Your email"
                        />
                        <button type="button" class="btn btn-light ms-3">Subscribe</button>
                    </form>
                </div>
              </div>
            </section>
            <section className="footer-info">
                <div className="footer-link-items mt-4">
                    <Row className="mx-auto">
                        <Col className="footer-column col-xs-6 col-lg-3 mb-3">
                            <h2>About Us</h2>
                            <ul>
                                <li><a href="#">How it works</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </Col>
                        <Col className="footer-column col-12 col-md-6 col-lg-3 mb-3">
                            <h2>Contact Us</h2>
                            <ul>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Destinations</a></li>
                                <li><a href="#">Sponsorships</a></li>
                            </ul>
                        </Col>
                        <Col className="footer-column col-12 col-md-6 col-lg-3 mb-3">
                            <h2>Videos</h2>
                            <ul>
                                <li><a href="#">Submit Video</a></li>
                                <li><a href="#">Ambassadors</a></li>
                                <li><a href="#">Agency</a></li>
                                <li><a href="#">Influencer</a></li>
                            </ul>
                        </Col>
                        <Col className="footer-column col-12 col-md-6 col-lg-3 mb-3">
                            <h2>Social Media</h2>
                            <ul>
                                <li><a href="#">Instargram</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Youtube</a></li>
                                <li><a href="#">Twitter</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </section>
            <section>
               <div className="footer-link d-flex flex-column flex-sm-row justify-content-center align-items-center pt-3 border-top">
                   <p className="text-center me-3">© 2023 React WebSite by Truong</p>    
                   <ul className="list-unstyled d-flex">
                       <li>
                           <a className="link-light" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                       </li>
                       <li className="ms-3">
                           <a className="link-light" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                       </li>
                       <li className="ms-3">
                           <a className="link-light" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                       </li>
                       <li className="ms-3">
                           <a className="link-light" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                       </li>
                   </ul>
               </div>
            </section>
        </div>
    )
}

export default Footer;