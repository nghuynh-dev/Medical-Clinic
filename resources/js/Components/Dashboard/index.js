import Sidebar from "../Sidebar";
import React, {useContext, useEffect, useMemo, useState} from "react";
import Repository from '../../services/repository'
import Table from "../Table";
import {DataContext} from "../../Pages/app";
import {format, parseISO} from "date-fns";
import {FaCheck, FaPlus, FaTimes} from "react-icons/fa";
import Swal from "sweetalert2";
import PrescriptionModal from "../Modal/PrescriptionModal";

export default function Dashboard() {
    const [userBooking, setUserBooking] = useState('')
    const contextData = useContext(DataContext)
    const {setListPres} = contextData
    const [count, setCount] = useState('')
    const [modalShow, setModalShow] = React.useState(false);
    const handleMakePrescription = async (id) => {
        const endpoint = `booking/${id}`
        const response = await Repository.get(endpoint)
        setUserBooking(response.data)

        const endpoint1 = `prescription/${id}`
        const response1 = await Repository.get(endpoint1)
        setListPres(response1.data)
    }

    // const id = contextData.bookingId
    useEffect(async () => {
        const endpoint = 'booking/count'
        const response = await Repository.get(endpoint)
        setCount(response?.data)
        return () => {
            setCount('');
        };
    }, [])


    const COLUMNS = [
        {
            Header: 'No.',
            accessor: 'id',
            Cell: ({cell: {value}}) => {
                return (
                    <div style={{width: '40px'}}>{value}</div>

                )
            }
        },
        {
            Header: 'Date',
            accessor: 'date',
            Cell: ({cell: {value}}) => {
                return (
                    <div style={{width: '120px'}}>{format(parseISO(value), 'MM-dd-yyyy')}</div>
                )
            }
        },
        {
            Header: 'Patient',
            accessor: 'patient_name',
            Cell: ({cell: {value}}) => {
                return (
                    <div style={{width: '220px'}}>{value}</div>
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
        },
        {
            Header: 'Room',
            accessor: 'room_name',
            Cell: ({cell: {value}}) => {
                return (
                    <div style={{width: '100px'}}>{value}</div>

                )
            }
        },
        {
            Header: 'Patient Phone',
            accessor: 'phone',
            Cell: ({cell: {value}}) => {
                return (
                    <div style={{width: '170px'}}>{value}</div>

                )
            }
        },
        {
            Header: 'Prescription',
            accessor: 'prescription_id',
            Cell: ({cell: {row}}) => {
                const id = row.original.id
                return (
                    <div style={{width: '140px'}}>
                    <span
                        style={{marginLeft: '0 !important', backgroundColor: '#3da5f4'}}
                        className="btn ml-1  text-white"
                        onClick={() => {
                            setModalShow(true)
                            handleMakePrescription(id)
                        }}
                    >
                        View
                    </span>
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
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({cell: {row}}) => {
                if (row.original.status == 0) return (
                    <div style={{display: "flex", alignItems: 'center', color: 'white'}}>
                        <div className={'bg-warning'}
                             style={{
                                 textAlign: 'center',
                                 width: '120px',
                                 borderRadius: '4px',
                                 padding: "10px 26px"
                             }}>Pending
                        </div>
                        <div style={{
                            marginLeft: '40px',
                            height: "60px",
                            width: "80px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px'
                        }}>
                            {/*<FaPlus style={{color: '#b0b1b1', marginRight: '10px'}}/>*/}
                            <FaCheck
                                onClick={() => {
                                    Swal.fire({
                                        title: 'Are you sure?',
                                        text: "Would you like to confirm the appointment?",
                                        icon: 'question',
                                        showCancelButton: true,
                                        confirmButtonColor: '#00c689',
                                        cancelButtonColor: '#f1536e',
                                        confirmButtonText: 'Yes'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Approved Success!',
                                                showConfirmButton: false,
                                                timer: 1000
                                            })
                                            const id = row.original.id
                                            const endpoint = `booking/${id}/approved`
                                            Repository.get(endpoint)
                                            location.reload()
                                        }
                                    })
                                }}
                                style={{marginRight: '10px', color: "#00c689", cursor: 'pointer'}}/>
                            <FaTimes onClick={() => {
                                Swal.fire({
                                    title: 'Are you sure?',
                                    text: "Would you like to decline the appointment?",
                                    icon: 'question',
                                    showCancelButton: true,
                                    confirmButtonColor: '#00c689',
                                    cancelButtonColor: '#f1536e',
                                    confirmButtonText: 'Yes'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Decline Success!',
                                            showConfirmButton: false,
                                            timer: 1000
                                        })
                                        const id = row.original.id
                                        const endpoint = `booking/${id}/decline`
                                        Repository.get(endpoint)
                                        location.reload()
                                    }
                                })
                            }} style={{color: '#f1536e', cursor: 'pointer'}}/>
                        </div>
                    </div>
                )
                if (row.original.status == 1) return (
                    <div style={{display: "flex", alignItems: 'center', color: 'white'}}>
                        <div className={'bg-success'}
                             style={{
                                 textAlign: 'center',
                                 width: '120px',
                                 borderRadius: '4px',
                                 padding: "10px 26px"
                             }}>Approved
                        </div>
                        <div style={{
                            marginLeft: '40px',
                            height: "60px",
                            width: "80px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px'
                        }}>
                            <FaCheck style={{marginRight: '10px', color: '#b0b1b1'}}/>
                            <FaTimes style={{color: '#b0b1b1'}}/>
                        </div>
                    </div>
                )
                else return (
                    <div style={{display: "flex", alignItems: 'center', color: 'white'}}>
                        <div className={'bg-danger'}
                             style={{
                                 textAlign: 'center',
                                 width: '120px',
                                 borderRadius: '4px',
                                 padding: "10px 26px"
                             }}>Decline
                        </div>
                        <div style={{
                            marginLeft: '40px',
                            height: "60px",
                            width: "80px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px'
                        }}>
                            {/*<FaPlus style={{color: '#b0b1b1', marginRight: '10px'}}/>*/}
                            <FaCheck style={{marginRight: '10px', color: '#b0b1b1'}}/>
                            <FaTimes style={{color: '#b0b1b1'}}/>
                        </div>
                    </div>
                )
            }
        },
    ]
    const booking = contextData.booking
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => booking, [booking.length])

    return (
        <div className="container-fluid row">
            <Sidebar/>
            {
                <div id="responsive-dashboard" className="col-md-10 p-4 pr-5"
                     style={{position: 'absolute', right: 0, backgroundColor: '#F4FDFB'}}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-danger"}>
                                <h1 className="w-25 mr-2">{count ? count.pending : 0}</h1>
                                <h6>Pending Appointments</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-warning"}>
                                <h1 className="w-25 mr-2">{count ? count.today : 0}</h1>
                                <h6>Today Appointments</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-success"}>
                                <h1 className="w-25 mr-2">{count ? count.total : 0}</h1>
                                <h6>Total Appointments</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-info"}>
                                <h1 className="w-25 mr-2">{count ? count.user - 1 : 0}</h1>
                                <h6>Total Patient</h6>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow-sm p-3">
                        <div className="py-3 d-flex align-items-center justify-content-between">
                            <h2 className="text-primary">Manage Appointment</h2>
                        </div>
                        <Table columns={columns} data={data}/>
                    </div>
                </div>
            }
            <PrescriptionModal data={userBooking} show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    )
}
