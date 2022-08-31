import React, {useEffect, useState, useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import logo from '../../../assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {ButtonGroup} from "reactstrap";
import axios from "../../services/base.service";
import './style.css';
import {DataContext} from "../../Pages/app";
export default function Header(){
    const [ isSticky, setSticky ] = useState(false);
    const [ isCollapsed, setCollapsed ] = useState(null);

    const dataContext = useContext(DataContext)
    const userToken = dataContext.userToken?.username
    const location = useLocation()
    const arrayPath = location.pathname.split('/')
    const pathName = arrayPath[1]
    let currentPage = null
    switch (pathName) {
        case '':
            currentPage = '/'
            break
        case 'appointment':
            currentPage = '/appointment'
            break
        case 'my-booking':
            currentPage = '/my-booking'
            break
        case 'reviews':
            currentPage = '/reviews'
            break
        case 'contact':
            currentPage = '/contact'
            break
        default:
            currentPage = '/'
            break
    }
    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        await axios.get("/logout", headers)
            .then(function () {
                localStorage.removeItem("token");
                window.location.reload()
            })
    }


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false)
            }
        });

    }, []);
    return(
        <nav
            className={
                isSticky || isCollapsed ? (
                    'slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-3  fixed-top'
                ) : (
                    'slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top '
                )
            }
        >
            <div className="container">
                <Link className="navbar-brand" to="/" style={{ color: '#15D1C8' }}>
                    <img src={logo} alt="logo"/><span className="logo-name"> Medical Clinic </span>
                </Link>
                <button
                    onClick={() => setCollapsed(!isCollapsed ? 'show' : null)}
                    className="navbar-toggle d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon" />
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">
                    <Nav className="navbar-nav ml-auto mt-2 mt-lg-0" as="ul" activeKey={currentPage}>
                        <Nav.Link eventKey={'/'} className="nav-item" as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link eventKey={"/appointment"} className="nav-item" as={Link} to="/appointment">
                            Make Appointment
                        </Nav.Link>
                        <Nav.Link eventKey={"/my-booking"} className="nav-item" as={Link} to="/my-booking">
                            My Booking
                        </Nav.Link>
                        <Nav.Link eventKey={"/reviews"} className="nav-item" as={Link} to="/reviews">
                            Reviews
                        </Nav.Link>
                        <Nav.Link eventKey={"/contact"} className="nav-item" as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                        <DropdownButton
                            className={'btn'}
                            as={ButtonGroup}
                            key={'down'}
                            id={'dropdown-button-drop-down'}
                            drop={'down'}
                            style={{ marginLeft : "50px", padding: "0"}}
                            title={userToken ? userToken : ''}
                        >
                            <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                </div>
            </div>
        </nav>
    )
}
