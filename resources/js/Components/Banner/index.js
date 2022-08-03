import React from 'react';
import {Link} from "react-router-dom";
import BannerImg from '../../../assets/images/banner-img.jpg';
import './style.css'

export default function Banner() {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row align-items-center" style={{ height: '100vh' }}>
                    <div className="col-md-4">
                        <h1>
                            Booking Doctor <br /> Online
                        </h1>
                        <p className="my-4">
                            Make an appointment with the country's most qualified specialists, private and confidential.
                        </p>
                        <Link className="btn btn-primary button-style" to="/appointment">
                            Make Appointment
                        </Link>
                    </div>
                    <div className="col-md-6 d-none d-md-block offset-1">
                        <img className="img" src={BannerImg} alt="banner-img" width="120%"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
