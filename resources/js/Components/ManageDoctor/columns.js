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
        Header: 'Name',
        accessor: 'name',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '250px'}}>{value}</div>

            )
        }
    },
    {
        Header: 'Education',
        accessor: 'edu',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '300px'}}>{value}</div>

            )
        }
    },
    {
        Header: 'Speciality',
        accessor: 'speciality',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '250px'}}>{value}</div>

            )
        }
    },
    {
        Header: 'Joined Date',
        accessor: 'joined',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '180px'}}>{format(parseISO(value), 'MM-dd-yyyy')}</div>
            )
        }
    },
    {
        Header: 'Address',
        accessor: 'address',
        Cell: ({ cell: {value} }) => {
            return (
                <div style={{width : '300px'}}>{value}</div>
            )
        }
    },
]
