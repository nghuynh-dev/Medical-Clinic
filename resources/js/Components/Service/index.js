import React from 'react';

const Services = () => {
    const services = [
        {
            name : 'Upload Medical Report',
            img : 'https://i.imgur.com/htqT9X4.png',
            description : 'Upload and save important medical reports in the wrb app. Your reports are safely stored and they help the doctors to provide you get all kinds of health related services with accurate consultation.'
        },
        {
            name : 'Get Medicine Reminder',
            img : 'https://i.imgur.com/sb3UrlO.png',
            description : 'Who remembers to take medicine on time! That’s why the web app has a medicine reminder feature which auto-sync with e-prescriptions and will remind you to take the medicine at the right time.'
        },
        {
            name : 'Create Health Profile',
            img : 'https://i.imgur.com/Zc8dKE2.png',
            description : 'Add information about your current or chronic medical conditions, family medical history  in the profile section of the web App. Allow Doctors to ensure fast and accurate medical care for you.'
        },
    ]
    return (
        <section className="services mb-5 pt-0">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-uppercase text-primary">Our services</h5>
                    <h1 className="style-color">Service We Provide</h1>
                </div>
                <div className="row mt-5 pt-3">
                    {
                        services.map((service,index) => {
                            return (
                                <div key={index} className="col-md-4 mb-5 text-center">
                                    <img src={service.img} alt="icon" width="40%"/>
                                    <h4 className="my-4 style-color" >{service.name}</h4>
                                    <p className="text-secondary">{service.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
