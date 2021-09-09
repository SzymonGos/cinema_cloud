import React from 'react';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import MovieCard from '../MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// Remove list when fetch data
const movies = [
    {
        title: 'Movie 1'
    },
    {
        title: 'Movie 2'
    },
    {
        title: 'Movie 3'
    },
    {
        title: 'Movie 4'
    },
    {
        title: 'Movie 5'
    },
    {
        title: 'Movie 6'
    },
    {
        title: 'Movie 7'
    },
    {
        title: 'Movie 8'
    },
    {
        title: 'Movie 9'
    },
    {
        title: 'Movie 10'
    }
];

const ArrowLeft = (props) => {
    return (
        <FontAwesomeIcon 
        className='slick-arrow prev'
        icon={faAngleLeft}    
        onClick={props.onClick}
        />
    )
};

const ArrowRight = (props) => {
    return (
        <FontAwesomeIcon 
        className='slick-arrow next'
        icon={faAngleRight}   
        onClick={props.onClick}
        />
    )
}

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <ArrowRight/>,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className='carousel-content'>
            <Slider {...settings}>
                {movies.map((movie) => <MovieCard  
                {...movie}
                styles={{'margin':'2rem 0'}}
                 />)}
            </Slider>
        </div>
    )
}
