import React from "react";
import '../app.css';
import Banner from "../Components/Banner";
import Info from "../Components/Info";
import Service from "../Components/Service";
import AppointmentBanner from "../Components/AppointmentBanner";
import Doctors from "../Components/Doctors";
import Feature from "../Components/Feature";
import Review from "../Components/Review";
import Blog from "../Components/Blog";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Home(){
    return(
        <div className="header-content">
            <Banner />
            <Info />
            <Service />
            <AppointmentBanner />
            <Doctors />
            <Feature />
            <Review />
            <Blog />
            <Footer />
        </div>
    )
}
