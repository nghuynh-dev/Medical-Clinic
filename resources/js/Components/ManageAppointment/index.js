import React from 'react';
import Sidebar from "../Sidebar";
import Table from "../Table";

function ManageDoctor() {
    return (
        <div className="container-fluid row">
            <Sidebar />
            <div id="responsive-dashboard"className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <div className="row">
                    <div className="col-md-3">
                        <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-danger"}>
                            <h1 className="w-25 mr-2">{0}</h1>
                            <h6>Pending Appointments</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-warning"}>
                            <h1 className="w-25 mr-2">{0}</h1>
                            <h6>Today Appointments</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-success"}>
                            <h1 className="w-25 mr-2">{0}</h1>
                            <h6>Total Appointments</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-info"}>
                            <h1 className="w-25 mr-2">{0}</h1>
                            <h6>Total Patient</h6>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded shadow-sm p-3">
                    <div className="py-3 d-flex align-items-center justify-content-between">
                        <h2 className="text-primary">Manage Appointment</h2>
                    </div>
                    {/*<Table columns={columns} data={data}/>*/}
                </div>
            </div>
        </div>
    );
}

export default ManageDoctor;
