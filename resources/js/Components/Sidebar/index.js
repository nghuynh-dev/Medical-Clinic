import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './style.css'
import {
    faCalendar,
    faGripHorizontal,
    faSignOutAlt,
    faUser,
    faUserPlus,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
// import logo from '../../../assets/images/logo.png';
import {DataContext} from "../../Pages/app";
import axios from "../../services/base.service";

export default function Sidebar(){
    const contextData = useContext(DataContext)
    // const user = contextData.userToken
    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        await axios.get("/logout", headers)
            .then(function () {
                localStorage.removeItem("token");
                window.location.reload();
            })
    }
    return(
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ minHeight: '100vh' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" style={{ color: '#15D1C8' }}>
                        <h1 className="text-white navName">Medical Portal</h1>
                    </Link>
                </li>
                    <div>
                        <li>
                            <Link to="/dashboard" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Appointment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/doctor" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Doctor</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/user" className="text-white">
                                <FontAwesomeIcon icon={faUsers} /> <span>Users</span>
                            </Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link to="/dashboard/prescriptions" className="text-white">*/}
                        {/*        <FontAwesomeIcon icon={faUsers} /> <span>Prescriptions</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <Link to="/dashboard/doctors" className="text-white">*/}
                        {/*        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                    </div>
            </ul>
            <div>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span onClick={handleLogout}>Logout</span>
                </Link>
            </div>
        </div>
    )
}
