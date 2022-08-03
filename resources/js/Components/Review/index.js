import React, { useEffect, useState } from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './style.css';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual ]);

const Review = () => {

    const [reviews, SetReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/review")
            .then(res => res.json())
            .then(data => {
                SetReviews(data);
            });
    }, []);

    return (
        <section className="testimonials my-5 py-4">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Review</h5>
                    <h1 className="style-color ">
                        What Our Patients <br /> Says
                    </h1>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView="auto"
                    centeredslide="false"
                    navigation
                    autoplay={true}
                    key={reviews.length}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="card-deck mt-4 mb-5">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text text-center">{review.desc}</p>
                                    </div>
                                    <div className="card-footer d-flex  align-items-center">
                                        <img className="mx-3" src={review.img} alt="patient" width="60"
                                             style={{borderRadius: '50%'}}/>
                                        <div>
                                            <h6 className="text-primary">{review.name}</h6>
                                            <p className="m-0">Age {review.age}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Review;
