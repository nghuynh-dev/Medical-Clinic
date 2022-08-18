import Sidebar from "../Sidebar";
import React, {useContext, useEffect, useMemo, useState} from "react";
import Repository from '../../services/repository'
import Table from "../Table";
import {DataContext} from "../../Pages/app";
import {COLUMNS} from "../Table/columns";

export default function Dashboard(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [count, setCount] = useState('')
    useEffect(async () => {
        const endpoint = 'booking/count'
        const response = await Repository.get(endpoint)
        setCount(response?.data)
    },[])

    const contextData = useContext(DataContext)
    const booking = contextData.booking
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => booking, [booking.length])

    return (
        <div className="container-fluid row">
            <Sidebar />
            <div id="responsive-dashboard"className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h5>Analysis</h5>
                <div className="row my-5">
                    <div className="col-md-3">
                        <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-danger"}>
                            <h1 className="w-25 mr-2">{count.pending}</h1>
                            <h6>Pending Appointments</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-warning"}>
                            <h1 className="w-25 mr-2">{count.today}</h1>
                            <h6>Today Appointments</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-success"}>
                            <h1 className="w-25 mr-2">{count.total}</h1>
                            <h6>Total Appointments</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-info"}>
                            <h1 className="w-25 mr-2">{count.user}</h1>
                            <h6>Total User</h6>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded shadow-sm p-3">
                    <div className="py-3 d-flex align-items-center justify-content-between">
                        <h2 className="text-primary">Dashboard</h2>
                    </div>
                    <Table columns={columns} data={data}/>
                </div>
            </div>
        </div>
    )
}
