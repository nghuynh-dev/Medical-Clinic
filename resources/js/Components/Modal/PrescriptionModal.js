import React, {useContext, useState,} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Repository from "../../services/repository";
import {DataContext} from "../../Pages/app";

function PrescriptionModal(props) {
    const {patient_name, gender, age, name, weight, edu, date, id} = props.data
    const contextData = useContext(DataContext)
    const {setListPres, listPres} = contextData
    const [medicine, setMedicine] = useState(undefined)
    const [doge, setDoge] = useState("1 - 1 - 1")
    const [days, setDays] = useState(undefined)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            booking_id: id, medicine: medicine, doge: doge, days: days
        };
        const endpoint = 'prescription'
        await Repository.post(endpoint, data)

        const endpoint2 = `prescription/${id}`
        const res = await Repository.get(endpoint2)
        setListPres(res.data)
    }
    return (<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                <h2 className="text-primary">Prescriptions</h2>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="px-5 py-3">
                <div className="mb-4 text-center">
                    <h3 className="text-success">Doctor: {name}</h3>
                    <p className="my-0">
                        {edu}
                    </p>
                    <p className="my-0">
                        <small>
                            On {date}
                        </small>
                    </p>
                </div>
            </div>
            <div className='mx-5'>
                <div className="mb-3 mb-4 d-flex justify-content-between">
								<span style={{color: '#1cc7c1'}}>
									<strong>{patient_name}</strong>
								</span>
                    <span>
                            Gender : {gender == 0 ? 'Male' : 'Female'}
                        </span>
                    <span>
                            Weight : {weight} Kg
                        </span>
                    <span>Age : {age}</span>
                </div>
                <form className="row add-prescription"
                >
                    <input
                        className="form-control col-6"
                        value={medicine}
                        onChange={(e) => setMedicine(e.target.value)}
                        placeholder="Medicine Name"
                        type="text"
                        required
                    />
                    <select required className="form-control col-3" value={doge}
                            onChange={(e) => setDoge(e.target.value)}>
                        <option value="1 - 1 - 1">1 - 1 - 1</option>
                        <option value="1 - 0 - 1">1 - 0 - 1</option>
                        <option value="1 - 0 - 0">1 - 0 - 0</option>
                        <option value="1 - 1 - 0">1 - 1 - 0</option>
                        <option value="1 - 1 - 0">1 - 1 - 0</option>
                        <option value="0 - 1 - 1">0 - 1 - 1</option>
                        <option value="1 - 0 - 0">1 - 0 - 0</option>
                        <option value="0 - 0 - 1">0 - 0 - 1</option>
                    </select>
                    <input
                        required
                        value={days}
                        className="form-control col-2"
                        type="number"
                        placeholder="Days"
                        onChange={(e) => setDays(e.target.value)}
                    />
                    <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary col-1">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </form>
                <div className="mt-5" style={{height: '300px', overflow: 'auto'}}>
                    <table className="table table-borderless">
                        {listPres && listPres.map((item, index) => {
                            return (<tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{item.medicine}</td>
                                <td>{item.doge}</td>
                                <td>{item.days} Days</td>
                            </tr>)
                        })}
                    </table>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>);
}

export default PrescriptionModal;
