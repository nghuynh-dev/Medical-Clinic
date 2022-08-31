import React, {useContext, useEffect, useState} from 'react';
import Sidebar from "../Sidebar";
import Table from "../Table";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {DataContext} from "../../Pages/app";
import {useHistory} from "react-router-dom";
import Repository from "../../services/repository";

function CreatePrescription(props) {
    const context = useContext(DataContext)
    const [userBooking, setUserBooking] = useState('')
    const id = context.bookingId
    const history = useHistory()
    useEffect(async () => {
        const endpoint = `booking/${id}`
        const response = await Repository.get(endpoint)
        setUserBooking(response.data)
    },[])
    console.log(userBooking)
    return (
        <div className="container-fluid row">
            <Sidebar />
            <Container id="responsive-dashboard" className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <div className="bg-white rounded shadow-sm p-3" >
                    <div className="py-3 d-flex align-items-center" >
                        <h4>
                            <b className={'text-primary'}>Manage Appointment > Make Prescription</b>
                        </h4>
                    </div>
                    <div className="bg-white rounded p-3" style={{maxWidth: '800px'}}>
                        <br></br>
                        <Form >
                            <Form.Group controlId="formBasicText">
                                <Row>
                                    <Col>
                                        <Form.Label>Patient Name</Form.Label>
                                    </Col>
                                    <Col md={8}>
                                        <Form.Control
                                            required
                                            type="text"
                                            value={userBooking.patient_name}
                                            disabled
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="formBasicText">
                                <Row>
                                    <Col>
                                        <Form.Label>Doctor</Form.Label>
                                    </Col>
                                    <Col md={8}>
                                        <Form.Control
                                            type="text"
                                            value={userBooking.name}
                                            disabled
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <br></br>
                            <Form.Group controlId="formBasicDate">
                                <Row>
                                    <Col>
                                        <Form.Label>Examination Date</Form.Label>
                                    </Col>
                                    <Col md={8}>
                                        <Form.Control
                                            required
                                            type="date"
                                            value={userBooking.date}
                                            disabled
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="formGender">
                                <Row>
                                    <Col>
                                        <Form.Label>Gender</Form.Label>
                                    </Col >
                                    <Col md={8}>
                                        <Form.Check inline
                                                    id="female"
                                                    name="gender"
                                                    type="radio"
                                                    value={0}
                                                    label="Female"
                                            // onChange={(e) => setGender(e.target.value)}
                                        >

                                        </Form.Check>
                                        <Form.Check inline
                                                    id="male"
                                                    name="gender"
                                                    type="radio"
                                                    label="Male"
                                                    value={1}
                                            // onChange={(e) => setGender(e.target.value)}
                                        >
                                        </Form.Check>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="formJoinedDate">
                                <Row>
                                    <Col>
                                        <Form.Label>Joined Date</Form.Label>
                                    </Col>
                                    <Col md={8}>
                                        <Form.Control
                                            type="date"
                                            // onChange={(e) => joinDateCheck(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <br></br>
                            <Form.Group controlId="formBasicSelect">
                                <Row>
                                    <Col>
                                        <Form.Label>Type</Form.Label>
                                    </Col>
                                    <Col md={8}>
                                        <Form.Control
                                            as="select"
                                            // onChange={(e) => {
                                            //     setType(e.target.value);
                                            // }}
                                        >
                                            <option value={0}>Staff</option>
                                            <option value={1}>Admin</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group style={{ marginTop: "16px" }} controlId="formBasicSelect">
                                <Row>
                                    <Col>
                                        <Form.Label>Location</Form.Label>
                                    </Col>
                                    <Col md={8}>
                                        <Form.Control
                                            as="select"
                                            // onChange={(e) => {
                                            //     setLocation(e.target.value);
                                            // }}
                                        >
                                            <option value={""}>---</option>
                                            <option value={"HN"}>Ha Noi</option>
                                            <option value={"DN"}>Da Nang</option>
                                            <option value={"HCM"}>Ho Chi Minh</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <br></br>
                            <Form.Group className="text-end">
                                {/*<p className="err-msg">{mess}</p>*/}
                                <Button
                                    className="me-3"
                                    variant="danger"
                                    type="submit"
                                    // disabled={enabled}
                                >
                                    Save
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => history.push("/dashboard")}
                                >
                                    Cancel
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>


                </div>


            </Container>
        </div>
    );
}

export default CreatePrescription;
