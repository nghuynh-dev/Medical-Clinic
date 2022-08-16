import React from 'react';
import BannerImg from '../../../assets/images/banner-img.jpg';
import '../AppointmentDoctor/style.css';
import Calendar from "../Calendar";

const AppointmentSection = () => {
    return (
        <div className="appointment-section">
            <div className="container">
                <div className="row" style={{height:"100vh"}}>
                    <div className="col-md-6  align-self-end">
                        <div className="calender-area pr-md-5 mr-md-5">
                            <h3 className="text-uppercase mb-4 style-color">Make Appointment</h3>
                            <Calendar />
                        </div>
                    </div>

                    <div className="col-md-6 align-self-center">
                        <img className="img" src={BannerImg} alt="banner" width="110%" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AppointmentSection;
