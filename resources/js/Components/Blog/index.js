import React from 'react';
import './style.css';

const blogs = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        author:'Dr. Tien',
        authorImg : 'https://img.medlatec.vn/ImagePath/imagesDoctor/20190909/20190909_BS-nguyen-cong-duy-C%C4%90HA.jpg',
        date : '07 June 2022'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        author:'Dr. Hanh',
        authorImg : "https://img.medlatec.vn/ImagePath/imagesDoctor/20191207/20191207_bs%20H%C6%B0%C6%A1ng%20C%C4%90HA%202.jpg",
        date : '24 July 2022'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        author:'Dr. Nghia',
        authorImg : "https://img.medlatec.vn/ImagePath/imagesDoctor/20190924/20190924_bac%20si_3.png",
        date : '05 September 2022'
    },
]

const Blog = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1 className="style-color">From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogs.map((blog,index) => {
                            return(
                                <div key={index} className="card shadow-sm mb-4">
                                    <div className="card-header d-flex  align-items-center">
                                        <img className="mx-3" src={blog.authorImg} alt="" width="60"/>
                                        <div>
                                            <h6 className="text-primary">{blog.author}</h6>
                                            <p className="m-0">{blog.date}</p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="style-color">{blog.title}</h5>
                                        <p className="card-text text-secondary mt-4">{blog.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;
