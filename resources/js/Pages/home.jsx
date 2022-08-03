import React from "react";
import Banner from "../Components/Banner";
import Info from "../Components/Info";
import Service from "../Components/Service";
import AppointmentBanner from "../Components/AppointmentBanner";
import Doctors from "../Components/Doctors";
import Feature from "../Components/Feature";
import Review from "../Components/Review";
import Blog from "../Components/Blog";

export default function Home(){
    return(
        <>
            <Banner />
            <Info />
            <Service />
            <AppointmentBanner />
            <Doctors />
            <Feature />
            <Review />
            <Blog />
        </>
    )
}
