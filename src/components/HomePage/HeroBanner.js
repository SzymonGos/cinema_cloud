import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faStar } from '@fortawesome/free-solid-svg-icons';

export default function HeroBanner() {
    return (
        <section className="hero">
            <div className="hero__shadow-top"></div>
            <div className='hero__rating'>
                <ul>
                    <li>
                        <FontAwesomeIcon
                            icon={faStar}
                        />
                    </li>
                    <li>
                        <h5 className='hero__movie-rating'>9.0</h5>
                    </li>
                    <li>
                        <h6 className='hero__max-rating'>/10</h6>
                    </li>
                </ul>
                <div className="hero__max-rating"><p>300 Ratings</p></div>
            </div>
            <div className="hero__shadow-bottom"></div>
            <div className="hero__content">
                <div className="hero__text-box">
                    <div className="hero__text-background">
                        <h1 className='title'>The Movie Title</h1>
                        <p className='paragraph'>Amazing description text about selected movie for this hero image banner.mazing description text about selected movie for this hero image banner.mazing description text about selected movie for this hero image banner.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
