import React, {useEffect} from 'react';
import Header from "../Components/Header";
import AppointmentSection from "../Components/AppointmentSection";
import AppointmentDoctor from "../Components/AppointmentDoctor";
import Footer from "../Components/Footer";

const Appointment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="header-content">
            {/*<Header />*/}
            <AppointmentSection />
            <AppointmentDoctor />
            <Footer />
        </div>
    );
};

export default Appointment;
