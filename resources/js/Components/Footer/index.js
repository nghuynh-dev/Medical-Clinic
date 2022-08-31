import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGooglePlusG, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const noNamed = [
        { name: 'portal@gmail.com', link: '/' },
        { name: '02837999999', link: '/' },
        { name: 'Emergency Care', link: '/' },
        { name: 'Check Up', link: '/' },
        { name: 'Treatment of Personal Diseases', link: '/' },
        { name: 'Check Up', link: '/' },,
        { name: 'Check Up', link: '/' }
    ];
    const ourAddress = [
        { name: 'Cu Chi, Ho Chi Minh, Viet Nam', link: '/' },
        { name: 'View in map', link: '/' }
    ];
    const oralHealth = [
        { name: 'Emergency Dental Care', link: '' },
        { name: 'Check Up', link: '/' },
        { name: 'Treatment of Personal Diseases', link: '/' },
        { name: 'Tooth Extraction', link: '/' },
        { name: 'Check Up', link: '/' },
        { name: 'Check Up', link: '/' },
        { name: 'Check Up', link: '/' }
    ];
    const services = [
        { name: 'Emergency Dental Care', link: '/' },
        { name: 'Check Up', link: '/' },
        { name: 'Treatment of Personal Diseases', link: '/' },
        { name: 'Tooth Extraction', link: '/' },
        { name: 'Check Up', link: '/' },
        { name: 'Check Up', link: '/' },
        { name: 'Check Up', link: '/' }
    ];
    return (
        <>
            <footer className="footer-area clear-both">
                <div className="container pt-3">
                    <h1 style={{textAlign : "center", fontWeight: "bold"}} className="text-primary">Contact</h1>
                    <div className="row py-5">
                        <div className="col-md-3">
                            <h4 className="text-primary">Online 's Portal</h4>
                            <ul className="list-unstyled mt-4">
                                {noNamed.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link} className="text-secondary">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="text-primary">Services</h4>
                            <ul className="list-unstyled mt-4">
                                {services.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link} className="text-secondary">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="text-primary">Oral Health</h4>
                            <ul className="list-unstyled mt-4">
                                {oralHealth.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link} className="text-secondary">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="text-primary">Our Address</h4>
                            <ul className="list-unstyled mt-4">
                                {ourAddress.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link} className="text-secondary">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="social-media list-inline">
                                <li className="list-inline-item">
                                    <a href="//facebook.com">
                                        <FontAwesomeIcon className="icon" icon={faFacebookF} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="//google.com">
                                        <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="//instagram.com">
                                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyRight text-center pb-3 text-secondary">
                        <p> &copy; 2022 Developed by Huynh Nguyen</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
