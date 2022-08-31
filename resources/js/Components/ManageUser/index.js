import React, {useEffect, useMemo, useState} from 'react';
import Sidebar from "../Sidebar";
import Repository from "../../services/repository";
import {COLUMNS} from "./columns";
import Table from "../Table";

function ManageUser() {
    const [list, setList] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(async () => {
        const endpoint = 'user'
        const response = await Repository.get(endpoint)
        setList(response.data)
    },[list.length])
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => list, [list.length])
    return (
        <div className="container-fluid row">
            <Sidebar />
            <div id="responsive-dashboard"className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <div className="bg-white rounded shadow-sm p-3">
                    <div className="py-3 d-flex align-items-center justify-content-between" style={{marginBottom: '30px'}}>
                        <h2 className="text-primary">Manage User</h2>
                    </div>
                    <Table  columns={columns} data={data}/>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
