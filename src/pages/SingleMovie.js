import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function SingleMovie() {
    return (
        <>
            <div className="backdrop">
                <div className="backdrop__shadow-top"></div>
                <div className='backdrop__rating'>
                    <ul>
                        <li>
                            <FontAwesomeIcon
                                icon={faStar}
                            />
                        </li>
                        <li>
                            <h5 className='backdrop__movie-rating'>9.0</h5>
                        </li>
                        <li>
                            <h6 className='backdrop__max-rating'>/10</h6>
                        </li>
                    </ul>
                    <div className="backdrop__max-rating"><p>300 Ratings</p></div>
                </div>
                <div className="backdrop__shadow-bottom"></div>
                <div className="backdrop__content">
                    <div className="backdrop__text-box">
                        <p className='movie-type'>Movie</p>
                        <h1 className='title'>The Movie Title</h1>
                        <span>
                            <p>Directed by <strong>John Smith</strong>,</p>
                        </span>
                        <span>
                            <p>2021</p>
                        </span>
                    </div>
                    <div className="backdrop__plot-md-up">                    
                        <p className='paragraph'>Amazing description text about selected movie for this hero image banner.mazing description text about selected movie for this hero image banner. Amazing description text about selected movie for this hero image banner. Amazing description text about selected movie for this hero image banner</p>
                    </div>
                </div>
            </div>
            <section className='plot'>
                <p className='paragraph'>
                <h2 className='plot__title'>Plot</h2>
                Amazing description text about selected movie for this hero image banner.mazing description text about selected movie for this hero image banner. Amazing description text about selected movie for this hero image banner. Amazing description text about selected movie for this hero image banner.</p>

            </section>
        </>
    )
}
