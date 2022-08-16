import React, {useEffect, useLayoutEffect, useState} from "react";
import {Link, useHistory, useLocation} from "react-router-dom";
import logo from '../../../assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Button, ButtonGroup} from "reactstrap";
import axios from "../../services/base.service";
import './style.css';
export default function Header(){
    const [ isSticky, setSticky ] = useState(false);
    const [ isCollapsed, setCollapsed ] = useState(null);
    const history = useHistory()
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

    const [userToken, setUserToken] = useState('')
    const getUserToken = async () => {
        const token = localStorage.getItem("token");
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        await axios.get("/user_token", headers)
            .then(function (response) {
                setUserToken(response?.data?.username);
            });
    };

    const [state, setState] = useState(1)
    useLayoutEffect(() => {
        getUserToken()
    },[state])
    const handleLogin = () => {
        history.push("/login")
    }
    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        await axios.get("/logout", headers)
            .then(function () {
                localStorage.removeItem("token");
                window.location.href = "/"
            })
        setState(prevState => prevState + 1)
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
                        <Nav.Link eventKey={"/reviews"} className="nav-item" as={Link} to="/reviews">
                            Reviews
                        </Nav.Link>
                        <Nav.Link eventKey={"/contact"} className="nav-item" as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                        {
                            userToken ?
                                <DropdownButton
                                    className={'btn'}
                                    as={ButtonGroup}
                                    key={'down'}
                                    id={'dropdown-button-drop-down'}
                                    drop={'down'}
                                    style={{ marginLeft : "50px", padding: "0"}}
                                    title={userToken}
                                >
                                    <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                                </DropdownButton> :
                                <Button className={'btn btn-primary'} style={{ marginLeft : "50px", padding: "0 30px" }} onClick={handleLogin}>Login</Button>
                        }
                    </Nav>
                    {/*<ul className="navbar-nav ml-auto mt-2 mt-lg-0">*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <Link className="nav-link" to="/">*/}
                    {/*            Home*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <Link className="nav-link" to="/appointment">*/}
                    {/*            Make Appointment*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <Link className="nav-link"  to="/reviews">*/}
                    {/*            Reviews*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <Link className="nav-link"  to="/contact">*/}
                    {/*            Contact Us*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    {*/}
                    {/*        userToken ?*/}
                    {/*            <DropdownButton*/}
                    {/*                className={'btn'}*/}
                    {/*                as={ButtonGroup}*/}
                    {/*                key={'down'}*/}
                    {/*                id={'dropdown-button-drop-down'}*/}
                    {/*                drop={'down'}*/}
                    {/*                style={{ marginLeft : "50px", padding: "0"}}*/}
                    {/*                title={username}*/}
                    {/*            >*/}
                    {/*                <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>*/}
                    {/*            </DropdownButton> :*/}
                    {/*            <Button className={'btn btn-primary'} style={{ marginLeft : "50px", padding: "0 30px" }} onClick={handleLogin}>Login</Button>*/}
                    {/*    }*/}
                    {/*</ul>*/}
                </div>
            </div>
        </nav>
    )
}
