import React from 'react';
import NIX from '../../../assets/images/logo.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faLinkedin,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <div>
    <section class="home-newsletter container">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="single">
                        <h2>Know Your Website SEO Score by Email</h2>
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="Enter your email"/>
                            <span class="input-group-btn">
                                <button class="btn btn-theme" type="submit">Subscribe</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            <section className='footer'>
            <div className="row  mx-5 row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 ">

            <div className="col ">
            <img src={NIX}  alt="..."/>
            <p className="footer-title mt-2">info@company.com  </p>
            <i className='icon-btn'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></i>
            <i className='icon-btn'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i>
            <i className='icon-btn'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></i>
            <i className='icon-btn'><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></i>

        </div>

        <div className="col">
            <h5 className="card-title mb-3">Services</h5>
             <p className="footer-title">SEO Development</p>
             <p className="footer-title">Business Growth</p>
             <p className="footer-title">Social Media Managment</p>
             <p className='footer-title'>Website Optimization</p>
        </div>

        <div className="col">

                <h5 className="card-title mb-2">Community</h5>
                <p className="footer-title">SEO Development</p>
             <p className="footer-title">Business Growth</p>
             <p className="footer-title">Social Media Managment</p>
             <p>Website Optimization</p>
          
        </div>

        <div className="col">
          
                <h5 className="card-title mb-2">Subscribe Newsletters</h5>
                <p>Get our latest news and ideas to your inbox</p>
                <button className='btn-blue'>your email <i className='ms-5 ps-5'><FontAwesomeIcon  icon={faPaperPlane}></FontAwesomeIcon></i></button>
         
        </div>
             </div>
                
            </section>

            <section className='container text-center footer-bottom'>
                <span ><hr></hr></span>
            <p> Copyright © 2023 Onix, Ltd. All Rights Reserved.<br/>
    Developed by <a href="https://github.com/mrmh-code" className='color-2'>Mehedi Hasan</a></p>
            </section>
        </div>
    );
};

export default Footer;