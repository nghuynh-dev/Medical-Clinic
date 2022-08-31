import {useContext, useState} from "react";
import React from 'react';
import {CalenderContext, DataContext} from "../../Pages/app";
import DoctorCard from "../DoctorCard";
import "./style.css";
import Modal from 'react-modal';
import axios from "../../Services/base.service";
import Swal from "sweetalert2";

export default function AppointmentDoctor() {
    const contextCalendar = useContext(CalenderContext);
    const date = contextCalendar.date
    const contextData = useContext(DataContext)
    const doctors = contextData.doctor
    const user = contextData.userToken
    const [showModal, setShowModal] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const [doctor, setDoctor] = useState({});
    const [gender, setGender] = useState(0)
    const [age, setAge] = useState(undefined)
    const [weight, setWeight] = useState(undefined)
    const [problem, setProblem] = useState('')
    const [mess, setMess] = useState("")

    const modalController = (data) => {
        setDoctor(data)
        setShowModal(true)
    }
    const successView = () => {
        setIsBooked(false);
        setShowModal(false);
    };

    let timerInterval
    const alert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Make booking successfully',
            html: 'Popup will close in <b></b> milliseconds.',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
                setIsBooked(false);
                setShowModal(false);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            date: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate(),
            doctor_id: doctor.id,
            room_id: Math.floor(Math.random() * 6) + 1,
            gender: gender,
            age: age,
            weight: weight,
            problem: problem,
        };
        const token = localStorage.getItem("token");
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        await axios
            .post("/booking", data, headers)
            .then(function () {
                setIsBooked(true)
            })
            .catch(function () {
                setMess("Data invalid");
            });
    };
    return (
        <div className="appointments container py-5 mt-5">
            <h3 className="text-primary text-center my-5">
                Available Appointments on {contextCalendar.date.toLocaleString('default', { month: 'long' })}{' '}
                {contextCalendar.date.getDate()}, {contextCalendar.date.getFullYear()}
            </h3>
            <div className="row">
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                        {doctors && doctors.map((data, index) => {
                            return (
                                <DoctorCard  key={index} doctorsData={data} modalController={modalController}/>
                            )}
                        )}
                </div>
            </div>
                {isBooked ? alert()
                    :
                    (
                        <Modal
                            isOpen={showModal}
                            ariaHideApp={false}
                            onRequestClose={() => setShowModal(false)}
                            id="modal-responsive"
                            style={{
                                overlay: {
                                    backgroundColor: 'rgba(130,125,125,0.75)'
                                },
                                content: {
                                    top: '55%',
                                    left: '50%',
                                    right: 'auto',
                                    bottom: 'auto',
                                    marginRight: '-50%',
                                    width: '45%',
                                    transform: 'translate(-50%, -50%)',
                                }
                            }}
                        >
                        <div className="px-4">
                            <h4 className="text-primary text-center">{doctor && doctor.edu}{' '}{doctor && doctor.speciality}</h4>
                            <h5 className="text-center style-color">{doctor && doctor.name}</h5>
                            <p className="text-center text-secondary  small mb-4">
                                On {contextCalendar.date.toLocaleString('default', { month: 'long' })} {' '}
                                {contextCalendar.date.getDate()}, {contextCalendar.date.getFullYear()}
                                <br /> Available Time: 9:00 AM - 11:00 AM
                            </p>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        value={user.patient_name}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        value={user.phone}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        value={user.email}
                                        disabled
                                    />
                                </div>
                                <div className="form-group row">
                                    <div className="col-4">
                                        <select
                                            className="form-control"
                                            name="gender"
                                            onChange={(e) => setGender(e.target.value)}
                                            required
                                        >
                                            <option value={0} >Male</option>
                                            <option value={1} >Female</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <input
                                            className="form-control"
                                            name="age"
                                            placeholder="Your Age"
                                            type="number"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-4">
                                        <input
                                            className="form-control"
                                            name="weight"
                                            placeholder="Weight"
                                            type="number"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
									<textarea
                                        className="form-control"
                                        name="problem"
                                        placeholder="Describe Your Problem... (Ex: headache)"
                                        type="text"
                                        value={problem}
                                        onChange={(e) => setProblem(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group text-right">
                                    <button type="submit" className="btn btn-primary">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        </Modal>
                    )
                }
        </div>
    )
}
