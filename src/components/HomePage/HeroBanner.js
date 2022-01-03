import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMAGE_URL, BACKDROP_SIZE } from '../../config/config';

export default function HeroBanner({ heroBanner }) {

    return (
        <section
            className="hero"
            style={
                heroBanner && { backgroundImage: `url(${IMAGE_URL}${BACKDROP_SIZE}${heroBanner.backdrop_path})` }}
        >
            <div className="hero__shadow-top"></div>
            <div className='hero__rating'>
                <ul>
                    <li>
                        <FontAwesomeIcon
                            icon={faStar}
                        />
                    </li>
                    <li>
                        {heroBanner && <h5 className='hero__movie-rating'>{heroBanner.vote_average}</h5>}
                    </li>
                    <li>
                        <h6 className='hero__max-rating'>/10</h6>
                    </li>
                </ul>
                {heroBanner && <div className="hero__max-rating"><p>{heroBanner.vote_count} Ratings</p></div>}
            </div>
            <div className="hero__shadow-bottom"></div>
            <div className="hero__content">
                <div className="hero__text-box">
                    {heroBanner && <h1 className='title'>{heroBanner.title}</h1>}
                    {heroBanner && <p className='paragraph'>{heroBanner.overview}</p>}
                </div>
            </div>
        </section>
    )
}
