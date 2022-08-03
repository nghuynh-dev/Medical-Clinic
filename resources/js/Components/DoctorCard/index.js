import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Doctors/style.css'

const DoctorCard = ({ doctorsData }) => {
    // const { img, category, name, education, designation, department, hospital } = doctorsData;
    // const [ descriptionCollapse, setDescriptionCollapse ] = useState(false);
    //
    // const showMore = () => {
    //     setDescriptionCollapse(true);
    // };
    //
    // const showLess = () => {
    //     setDescriptionCollapse(false);
    // };
    //
    // return (
    //     <div className="single-doctor">
    //
    //         {!doctorsData.image ? (
    //             <img className="img-fluid doctor-image" src={img} alt="doctor" />
    //         ) : (
    //             <img style={{ height: '200px' }} src={`data:image/png;base64,${doctorsData.image.img}`} alt="doctor" />
    //         )}
    //
    //         <div className="doctor-description">
    //             <p className="doctor-category">{category}</p>
    //             <h4 className="doctor-name">{name}</h4>
    //             <span className="doctor-education">{descriptionCollapse ? education : education.substr(0, 80)}</span>
    //             {education.length > 80 ? descriptionCollapse ? (
    //                 <span onClick={showLess} className="collapse-btn">
	// 					See Less
	// 				</span>
    //             ) : (
    //                 <span onClick={showMore} className="collapse-btn">
	// 					See More
	// 				</span>
    //             ) : (
    //                 <span> </span>
    //             )}
    //             <h6 className="mt-4">{designation}</h6>
    //             <h6 className="department">{department}</h6>
    //             <h6 className="hospital">{hospital}</h6>
    //             <div className="text-center">
    //                 <Link to="/appointment">
    //                     <button className="btn btn-primary button-style mt-3">
    //                         <FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book Appointment
    //                     </button>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // );
    const { img, name, edu, speciality } = doctorsData;

    return (
        <div className="single-doctor">

            {!doctorsData.image ? (
                <img className="img-fluid doctor-image" src={img} alt="doctor" />
            ) : (
                <img style={{ height: '200px' }} src={`data:image/png;base64,${doctorsData.image.img}`} alt="doctor" />
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
