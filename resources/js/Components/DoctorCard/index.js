import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Doctors/style.css'

const DoctorCard = ({ doctorsData, modalController }) => {
    const { img, name, edu, speciality } = doctorsData;
    return (
        <div className="single-doctor">
            <img className="img-fluid doctor-image" style={{maxWidth : "350px"}} src={'/assets/images/' + img + '.jpg'} alt="doctor" />
            <div className="doctor-description">
                <p style={{fontSize: "20px", margin: "0"}} className="doctor-category">{speciality}</p>
                <h3 className="doctor-name">{name}</h3>
                <p style={{fontSize: "16px"}} className="doctor-education">{edu}</p>
                <div className="text-center">
                    <Link to="/appointment">
                        <button className="btn btn-primary button-style mt-3" onClick={() => modalController(doctorsData)}>
                            <FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book Appointment
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
