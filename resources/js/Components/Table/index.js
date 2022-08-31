import React from 'react';
import {useTable, useSortBy, useGlobalFilter, usePagination} from "react-table";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import {GlobalFilter} from "./globalFilter";
import './style.css'
function Table(props) {
    const {columns, data} = props

    const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance

    const { globalFilter, pageIndex, pageSize } = state

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
                <div>
                    <span style={{marginRight: '12px'}}>
                    Page{' '}
                        <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                    <select style={{marginRight: '40px'}} value={pageSize} onChange={ e => setPageSize(Number(e.target.value))}>
                        {
                            [5, 10, 15, 20].map(pageSize => (
                                <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} >
                        {headerGroup.headers.map(column =>(
                            <th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                className="text-primary" style={{ fontSize: " 20px"}}
                            >
                                {column.render('Header')}
                                <span>
                                {column.isSorted ? (column.isSortedDesc ? <BiChevronDown /> : <BiChevronUp />) : ''}
                            </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} style={{height: "60px", width: "80px"}}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '18px'}}>
                <span className='text-primary' style={{marginRight: '30px', fontSize: '24px'}}>
                    Go to page: {' '}
                    <input
                        style={{width: '50px'}}
                        type='number'
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
                            gotoPage(pageNumber)
                        }}/>
                </span>
                <div>
                    <button style={{marginRight: '8px'}} className={'btn btn-primary button-style'} disabled={!canPreviousPage} onClick={ () => gotoPage(0)}>{'<<'}</button>
                    <button style={{marginRight: '8px'}} className={'btn btn-primary button-style'} disabled={!canPreviousPage} onClick={ () => previousPage()}>Previous</button>
                    <button style={{marginRight: '8px'}} className={'btn btn-primary button-style'} disabled={!canNextPage} onClick={ () => nextPage()}>Next</button>
                    <button style={{marginRight: '8px'}} className={'btn btn-primary button-style'} disabled={!canNextPage} onClick={ () => gotoPage(pageCount - 1)}>{'>>'}</button>
                </div>
            </div>
        </>
    )
}

export default Table;
