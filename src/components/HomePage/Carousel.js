import React from 'react';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import MovieCard from '../MovieCard';
import useMoviesFetch from '../../services/useMoviesFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { IMAGE_URL, POSTER_SIZE } from '../../config/config';
import Spinner from '../Spinner';


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

export default function Carousel({movies}) {

    const { isLoading } = useMoviesFetch();

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }            
            }, 
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true
                }            
            }
        ]
    };

    return (
        <div className='carousel-content'>
        {isLoading && <Spinner />}
            {movies && <Slider {...settings}>
                {movies.slice(0,10).map((movie, index) =>
                        <MovieCard
                            key={index}
                            title={movie.title}
                            id={movie.id}
                            image={`${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`}
                            styles={{ 'margin': '2rem 0' }}
                        />
                    
                )}
            </Slider>}
        </div>
    )
}
