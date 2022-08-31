import React from "react"

export const GlobalFilter = ( {filter, setFilter}) => {
    return (
        <h5 className={'text-primary'} style={{margin : "0"}}>
            Search: {' '}
            <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </h5>
    )
}
