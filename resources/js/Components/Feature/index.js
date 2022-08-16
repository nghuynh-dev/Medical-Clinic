import React from 'react';
import {Carousel, CarouselControl, CarouselIndicators, CarouselItem} from 'reactstrap';
import './style.css';

const features =  [
    {
        icon : '1',
        title : "Create Appointments",
        description : 'Visit the Online Doctors Portal web app and create your account in less than a minute, and make appointments easily form our specialist doctors.'
    },
    {
        icon : '2',
        title : "Get Medical Consultation",
        description : 'You can make an instant appointment and get the advice of a doctor in a video call, or you can make an appointment with a specialist doctor of your choice for the next time.'
    },
    {
        icon : '3',
        title : "Get E-Prescription",
        description : 'As soon as the video call ends, you will get the e-prescription given by the doctor in your app. You will also be given a reminder to take the medicine on time.'
    },
]

const items = [
    {
        src: 'https://i.pinimg.com/originals/13/b7/bc/13b7bcee8372da61e7a07b8ed3f4ca94.png'
    },
    {
        src: 'https://static.fullestop.com/mobile-site/images/doctor-appointment.svg'
    },
    {
        src: 'https://sc04.alicdn.com/kf/U3db117176e5048109d53049785397510I.png'
    },
    {
        src: 'https://thecaremd.com/admin/cms/gallery/59390-banner-image.jpg'
    }
];

const Features = () => {
    const [ activeIndex, setActiveIndex ] = React.useState(0);
    const [ animating, setAnimating ] = React.useState(false);

    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    const slides = items.map((item) => {
        return (
            <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
                <img src={item.src} alt={item.altText} width="100%" className="img-fluid" />
            </CarouselItem>
        );
    });

    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <div className="mt-4">
                        <h4 className="mb-5 mt-5 text-center">
                            Time and distance are no longer a matter of concern. Easily receive advice on physical
                            illness or health issues through video calling.
                        </h4>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <ul>
                            {features.map((feature) => (
                                <li key={feature.icon}>
                                    <div className="d-flex">
                                        <div className="icon">
                                            <span>{feature.icon}</span>
                                        </div>
                                        <div className="features-item-text">
                                            <h6>{feature.title}</h6>
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            keyboard={false}
                            pause={false}
                            ride="carousel"
                            interval="2000"
                            slide={false}
                            className="carousel-fade"
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className="d-none"/>
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
