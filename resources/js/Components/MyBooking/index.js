import React, { useEffect, useMemo, useState} from 'react';
import Footer from "../Footer";
import Repository from "../../services/repository";
import Table from "../Table";
import {format, parseISO} from "date-fns";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyBooking() {
    const [modalShow, setModalShow] = React.useState(false);
    const [userBooking, setUserBooking] = useState([])
    const [pres, setPres] = useState([])
    const COLUMNS = [
        {
            Header: 'No.',
            accessor: 'id',
            Cell: ({cell: { row}}) => {
                return (
                    <div style={{width: '100px'}}>{1 + Number(row.id)}</div>
                )
            }
        },
        {
            Header: 'Examination at',
            accessor: 'date',
            Cell: ({cell: {value}}) => {
                return (
                    <div style={{width: '180px'}}>{format(parseISO(value), 'MM-dd-yyyy')}</div>
                )
            }
        },
        {
            Header: 'Doctor',
            accessor: 'name',
            Cell: ({cell: {value}}) => {
                return (
                    <div style={{width: '200px'}}>{value}</div>
                )
            }
        }
        , {
            Header: 'Room',
            accessor: 'room_name',
            Cell: ({cell: {value}}) => {
                return (
                    <div style={{width: '120px'}}>{value}</div>
                )
            }
        },
        {
            Header: 'Prescription',
            accessor: 'prescription_id',
            Cell: ({cell: {row}}) => {
                const id = row.original.id
                return (
                    <div style={{width: '160px'}}>
                    <span
                        style={{backgroundColor: '#3da5f4'}}
                        className="btn text-white"
                        onClick={() => {
                            // setModalShow(true)
                            handleViewPres(id)
                        }}
                    >
                        View
                    </span>
                    </div>
                )
            }
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({cell: {row}}) => {
                if (row.original.status == 0) return (
                    <div style={{width: '250px', display: "flex", alignItems: 'center', color: 'white'}}>
                        <div className={'bg-warning'}
                             style={{
                                 textAlign: 'center',
                                 width: '150px',
                                 borderRadius: '4px',
                                 padding: "10px 26px"
                             }}>Pending
                        </div>
                    </div>
                )
                if (row.original.status == 1) return (
                    <div style={{display: "flex", alignItems: 'center', color: 'white'}}>
                        <div className={'bg-success'}
                             style={{
                                 textAlign: 'center',
                                 width: '150px',
                                 borderRadius: '4px',
                                 padding: "10px 26px"
                             }}>Approved
                        </div>
                    </div>
                )
                else return (
                    <div style={{display: "flex", alignItems: 'center', color: 'white'}}>
                        <div className={'bg-danger'}
                             style={{
                                 textAlign: 'center',
                                 width: '150px',
                                 borderRadius: '4px',
                                 padding: "10px 26px"
                             }}>Decline
                        </div>
                    </div>
                )
            }
        },
        {
            Header: 'Created Date',
            accessor: 'created_at',
            Cell: ({cell: {value}}) => {
                return (
                    <div style={{width: '180px'}}>{format(parseISO(value), 'MM-dd-yyyy')}</div>
                )
            }
        },

    ]
    const [list, setList] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(async () => {
        const endpoint = 'user_booking'
        const response = await Repository.get(endpoint)
        setList(response.data)
    }, [list.length])
    const handleViewPres = async (id) => {
        setModalShow(true)
        const endpoint = `booking/${id}`
        const response = await Repository.get(endpoint)
        setUserBooking(response.data)

        const endpoint2 = `prescription/${id}`
        const res = await Repository.get(endpoint2)
        setPres(res.data)
    }
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => list, [list.length])
    return (
        <div className="header-content banner-section">
            {/*<Banner />*/}
            <div className='container my-5' style={{paddingTop: '50px'}}>
                <div className="row flex" style={{flexDirection: 'column'}}>
                    <h2 className='text-primary my-4'>My Booking</h2>
                    <Table columns={columns} data={data}/>
                </div>
            </div>
            <Footer/>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
                            <h3 className="text-success">Doctor: {userBooking.name}</h3>
                            <p className="my-0">
                                {userBooking.edu}
                            </p>
                            <p className="my-0">
                                <small>
                                    On {userBooking.date}
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className="mb-3 mb-4 d-flex justify-content-between">
								<span style={{color: '#1cc7c1'}}>
									<strong>{userBooking.patient_name}</strong>
								</span>
                            <span>
                            Gender : {userBooking.gender == 0 ? 'Male' : 'Female'}
                        </span>
                            <span>
                            Weight : {userBooking.weight} Kg
                        </span>
                            <span>Age : {userBooking.age}</span>
                        </div>
                        <div className="mt-5" style={{height: '300px', overflow: 'auto'}}>
                            <table className="table table-borderless">
                                {pres && pres.map((item, index) => {
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
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MyBooking;
