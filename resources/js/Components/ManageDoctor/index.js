import React, {useContext, useEffect, useMemo} from 'react';
import Sidebar from "../Sidebar";
import Table from "../Table";
import {DataContext} from "../../Pages/app";
import {COLUMNS} from "./columns";


function ManageDoctor() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const contextData = useContext(DataContext)
    const doctor = contextData.doctor
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => doctor, [doctor.length])
    return (
        <div className="container-fluid row">
            <Sidebar />
            <div id="responsive-dashboard"className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <div className="bg-white rounded shadow-sm p-3">
                    <div className="py-3 d-flex align-items-center justify-content-between">
                        <h2 className="text-primary">Manage Doctor</h2>
                    </div>
                    <Table columns={columns} data={data}/>
                </div>
            </div>
        </div>
    );
}

export default ManageDoctor;
