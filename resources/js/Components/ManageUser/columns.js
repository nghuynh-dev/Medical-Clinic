import React from "react";
import {format, parseISO} from "date-fns";

export const COLUMNS = [
    {
        Header: 'No.',
        accessor: 'id',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '100px'}}>{value}</div>

            )
        }
    },
    {
        Header: 'Full Name',
        accessor: 'patient_name',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '250px'}}>{value}</div>

            )
        }
    },
    {
        Header: 'Email',
        accessor: 'email',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '250px'}}>{value}</div>

            )
        }
    },
    {
        Header: 'Username',
        accessor: 'username',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '220px'}}>{value}</div>

            )
        }
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '230px'}}>{value}</div>
            )
        }
    },
    {
        Header: 'Admin',
        accessor: 'admin',
        Cell: ({ cell: {value} }) => {
            if(value === 1) {
                return <div style={{width : '200px'}}><button type="button" className="btn btn-success">Admin</button></div>
            }
            else return <div style={{width : '200px'}}><button type="button" className="btn btn-warning">Patient</button></div>
        }
    },
    {
        Header: 'Register Date',
        accessor: 'created_at',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '180px'}}>{format(parseISO(value), 'MM-dd-yyyy')}</div>
            )
        }
    },
]
