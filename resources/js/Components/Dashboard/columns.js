// import React, {useContext} from "react";
// import { format, parseISO } from 'date-fns'
// import {FaCheck, FaTimes, FaPlus} from "react-icons/fa";
// import Repository from "../../services/repository";
// import Swal from 'sweetalert2'
//
// export const COLUMNS = [
//     {
//         Header: 'No.',
//         accessor: 'id',
//         Cell: ({ cell: {value} }) => {
//             return (
//                 <div style={{width : '60px'}}>{value}</div>
//
//             )
//         }
//     },
//     {
//         Header: 'Date',
//         accessor: 'date',
//         Cell: ({ cell: {value} }) => {
//             return (
//                 <div style={{width : '140px'}}>{format(parseISO(value), 'MM-dd-yyyy')}</div>
//             )
//         }
//     },
//     {
//         Header: 'Patient',
//         accessor: 'patient_name',
//         Cell: ({ cell: {value} }) => {
//             return (
//                 <div style={{width : '220px'}}>{value}</div>
//
//             )
//         }
//     },
//     {
//         Header: 'Doctor',
//         accessor: 'name',
//         Cell: ({ cell: {value} }) => {
//             return (
//                 <div style={{width : '250px'}}>{value}</div>
//
//             )
//         }
//     },
//     {
//         Header: 'Room',
//         accessor: 'room_name',
//         Cell: ({ cell: {value} }) => {
//             return (
//                 <div style={{width : '120px'}}>{value}</div>
//
//             )
//         }
//     },
//     {
//         Header: 'Patient Phone',
//         accessor: 'phone',
//         Cell: ({ cell: {value} }) => {
//             return (
//                 <div style={{width : '170px'}}>{value}</div>
//
//             )
//         }
//     },
//     {
//         Header: 'Created Date',
//         accessor: 'created_at',
//         Cell: ({ cell: {value} }) => {
//             return (
//                 <div style={{width : '180px'}}>{format(parseISO(value), 'MM-dd-yyyy')}</div>
//             )
//         }
//     },
//     {
//         Header: 'Status',
//         accessor: 'status',
//         Cell: ({ cell: {row} }) => {
//             if (row.original.status == 0) return (
//                 <div style={{display: "flex", alignItems: 'center', color: 'white'}}>
//                     <div className={'bg-warning'} style={{textAlign: 'center', width : '150px', borderRadius: '4px', padding : "10px 26px"}}>Pending</div>
//                     <div style={{ marginLeft: '80px',height: "60px", width: "80px", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>
//                         <FaPlus style={{color: '#b0b1b1', marginRight: '10px'}}/>
//                         <FaCheck
//                             onClick={ () => {
//                                 Swal.fire({
//                                     title: 'Are you sure?',
//                                     text: "Would you like to confirm the appointment?",
//                                     icon: 'question',
//                                     showCancelButton: true,
//                                     confirmButtonColor: '#00c689',
//                                     cancelButtonColor: '#f1536e',
//                                     confirmButtonText: 'Yes'
//                                 }).then((result) => {
//                                     if (result.isConfirmed) {
//                                         Swal.fire({
//                                             icon: 'success',
//                                             title: 'Approved Success!',
//                                             showConfirmButton: false,
//                                             timer: 1000
//                                         })
//                                         const id = row.original.id
//                                         const endpoint = `booking/${id}/approved`
//                                         Repository.get(endpoint)
//                                         location.reload()
//                                     }
//                                 })
//                             }}
//                             style={{marginRight: '10px', color: "#00c689", cursor: 'pointer'}}/>
//                         <FaTimes onClick={  () => {
//                             Swal.fire({
//                                 title: 'Are you sure?',
//                                 text: "Would you like to decline the appointment?",
//                                 icon: 'question',
//                                 showCancelButton: true,
//                                 confirmButtonColor: '#00c689',
//                                 cancelButtonColor: '#f1536e',
//                                 confirmButtonText: 'Yes'
//                             }).then((result) => {
//                                 if (result.isConfirmed) {
//                                     Swal.fire({
//                                         icon: 'success',
//                                         title: 'Decline Success!',
//                                         showConfirmButton: false,
//                                         timer: 1000
//                                     })
//                                     const id = row.original.id
//                                     const endpoint = `booking/${id}/decline`
//                                     Repository.get(endpoint)
//                                     location.reload()
//                                 }
//                             })
//                         }} style={{ color : '#f1536e', cursor: 'pointer'}}/>
//                     </div>
//                 </div>
//             )
//             if (row.original.status == 1) return (
//                 <div style={{display: "flex", alignItems: 'center', color: 'white'}}>
//                     <div className={'bg-success'} style={{textAlign: 'center', width : '150px', borderRadius: '4px', padding : "10px 26px"}}>Approved</div>
//                     <div style={{ marginLeft: '80px',height: "60px", width: "80px", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>
//                         <FaPlus
//                             style={{color: '#fda006', marginRight: '10px'}}
//                             onClick={ () => {
//                                 Swal.fire({
//                                     title: 'Are you sure?',
//                                     text: "Would you like to create prescription?",
//                                     icon: 'question',
//                                     showCancelButton: true,
//                                     confirmButtonColor: '#00c689',
//                                     cancelButtonColor: '#f1536e',
//                                     confirmButtonText: 'Yes'
//                                 }).then((result) => {
//                                     if (result.isConfirmed) {
//                                         window.location.href = '/dashboard/create-prescription'
//                                     }
//                                 })
//                             }}
//                         />
//                         <FaCheck style={{marginRight: '10px', color: '#b0b1b1'}}/>
//                         <FaTimes style={{ color: '#b0b1b1'}}/>
//                     </div>
//                 </div>
//             )
//             else return (
//                 <div style={{display: "flex", alignItems: 'center', color: 'white'}}>
//                     <div className={'bg-danger'} style={{textAlign: 'center', width : '150px', borderRadius: '4px', padding : "10px 26px"}}>Decline</div>
//                     <div style={{ marginLeft: '80px',height: "60px", width: "80px", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>
//                         <FaPlus style={{color: '#b0b1b1', marginRight: '10px'}}/>
//                         <FaCheck style={{marginRight: '10px', color: '#b0b1b1'}}/>
//                         <FaTimes style={{ color: '#b0b1b1'}}/>
//                     </div>
//                 </div>
//             )
//         }
//     },
// ]
