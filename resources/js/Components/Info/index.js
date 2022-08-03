import React from 'react';
import InfoCard from "../InfoCard";
import './style.css'
const Infos = () => {
    const infos = [
        {
            icon : 'clock',
            title : "Opening hours",
            description : 'We are open 7 days',
            bg: 'bg-primary'
        },
        {
            icon : 'location',
            title : "Our location",
            description : 'Cu Chi, Ho Chi Minh, Viet Nam',
            bg: 'bg-dark'
        },
        {
            icon : 'contact',
            title : "Contact us now",
            description : '+028379999999',
            bg: 'bg-primary'

        },
    ]
    return (
        <div className="infos">
            <div className="container">
                <div className="row mt-5">
                    {
                        infos.map((info, index) => <InfoCard key={index} info={info}/> )
                    }
                </div>
            </div>

        </div>
    );
};

export default Infos;
