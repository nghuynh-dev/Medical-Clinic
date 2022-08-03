import React, {useEffect, useState} from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import DoctorCard from "../DoctorCard";

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual ]);

const Doctors = () => {
    // const [ allAppointments, setAllAppointments ] = useState([]);
    //
    // useEffect(() => {
    //         fetch('https://online-doctors-portal.herokuapp.com/doctors')
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setAllAppointments(data);
    //             });
    //     },
    //     [ allAppointments.length ]
    // );
    // console.log(allAppointments);
    //
    // return (
    //     <section className="doctors">
    //         <div className="container my-5">
    //             <h1 className="text-center text-primary my-5">Our Doctors</h1>
    //             <div className="doctors-view">
    //                 <Swiper
    //                     spaceBetween={20}
    //                     slidesPerView={3}
    //                     centeredslide="true"
    //                     navigation
    //                     autoplay={true}
    //                     key={allAppointments && allAppointments.length}
    //                 >
    //                     {allAppointments && allAppointments.map((doctorsData, index) => (
    //                             <SwiperSlide key={index}>
    //                                 <DoctorCard key={doctorsData.id} doctorsData={doctorsData} />
    //                             </SwiperSlide>
    //                         ))}
    //                 </Swiper>
    //             </div>
    //         </div>
    //     </section>
    // );
    const [ allAppointments, setAllAppointments ] = useState([]);

    useEffect(() => {
            fetch('http://localhost:8000/api/doctor')
                .then((res) => res.json())
                .then((data) => {
                    setAllAppointments(data);
                });
        },
        [ allAppointments.length ]
    );

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
                        key={allAppointments && allAppointments.length}
                    >
                        {allAppointments && allAppointments.map((doctorsData, index) => (
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
