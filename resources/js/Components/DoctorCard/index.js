import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Doctors/style.css'

const DoctorCard = ({ doctorsData }) => {
    const { img, name, edu, speciality } = doctorsData;
    return (
        <div className="single-doctor">
            {!doctorsData.image ? (
                <img className="img-fluid doctor-image" style={{maxWidth : "350px"}} src={img} alt="doctor" />
            ) : (
                <img style={{ height: '200px', maxWidth : "350px"}} src={`data:image/png;base64,${doctorsData.image.img}`} alt="doctor" />
            )}

            <div className="doctor-description">
                <p style={{fontSize: "20px", margin: "0"}} className="doctor-category">{speciality}</p>
                <h3 className="doctor-name">{name}</h3>
                <p style={{fontSize: "16px"}} className="doctor-education">{edu}</p>
                <div className="text-center">
                    <Link to="/appointment">
                        <button className="btn btn-primary button-style mt-3">
                            <FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book Appointment
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
