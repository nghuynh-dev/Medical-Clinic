import React, {useContext} from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import DoctorCard from "../DoctorCard";
import {DataContext} from "../../Pages/app";

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual ]);

const Doctors = () => {
    const dataContext = useContext(DataContext)
    const doctor = dataContext.doctor
    return (
        <section className="doctors">
            <div className="container my-5">
                <h1 className="text-center text-primary my-5">Our Doctors</h1>
                <div className="doctors-view">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        centeredslide="true"
                        navigation
                        autoplay={true}
                        key={doctor && doctor.length}
                    >
                        {doctor && doctor.map((doctorsData, index) => (
                            <SwiperSlide key={index}>
                                <DoctorCard key={doctorsData.id} doctorsData={doctorsData} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Doctors;
