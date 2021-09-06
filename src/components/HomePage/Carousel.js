import React from 'react';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import MovieCard from '../MovieCard';

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
]

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {movies.map((movie) => <MovieCard  
                {...movie}
                styles={{'margin':'3rem 0'}}
                 />)}
            </Slider>
        </>
    )
}
