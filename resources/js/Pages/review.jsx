import React, {useEffect} from 'react';
import "../app.css"
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Review from "../Components/Review";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";

const Reviews = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="header-content">
            {/*<Header />*/}
            <Banner />
            <Review />
            <Blog />
            <Footer />
        </div>
    );
};

export default Reviews;
