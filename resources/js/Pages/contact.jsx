import React, { useEffect } from 'react';
import "../app.css"
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
const Contacts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="header-content">
            {/*<Header />*/}
            <Banner />
            {/*<Contact />*/}
            <Footer />
        </div>
    );
};

export default Contacts;
