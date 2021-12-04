import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import FavouriteBtn from '../components/FavouriteBtn';
import useSingleMovieFetch from '../services/useSingleMovieFetch';
import { IMAGE_URL, BACKDROP_SIZE } from '../config/config';

export default function SingleMovie() {

    const { id } = useParams();
    const movieId = parseInt(id);
    const { state } = useSingleMovieFetch(movieId);

    return (
        <>
            <div
                className="backdrop"
                style={
                    state && { backgroundImage: `url(${IMAGE_URL}${BACKDROP_SIZE}${state.backdrop_path})` }
                }
            >
                <div className="backdrop__shadow-top"></div>
                <div className='backdrop__rating'>
                    <ul>
                        <li>
                            <FontAwesomeIcon
                                icon={faStar}
                            />
                        </li>
                        <li>
                            {state && <h5 className='backdrop__movie-rating'>{state.vote_average}</h5>}
                        </li>
                        <li>
                            <h6 className='backdrop__max-rating'>/10</h6>
                        </li>
                    </ul>
                    {state && <div className="backdrop__max-rating"><p>{state.vote_count} Ratings</p></div>}
                </div>
                <div className="backdrop__shadow-bottom"></div>
                <div className="backdrop__content">
                    <div className="backdrop__text-box">
                        <div>
                            {state && <h1 className='title'>{state.title}</h1>}
                            <span className='card__favourite--singleMovie'>
                                <FavouriteBtn id={movieId} />
                            </span>
                        </div>
                        <span>
                            {state && <p>{state.release_date}</p>}
                        </span>
                    </div>
                    <div className="backdrop__plot-md-up">
                        {state && <p className='paragraph'>{state.overview}</p>}
                    </div>
                </div>
            </div>
            <section className='plot'>
                <h2 className='plot__title'>Plot</h2>
                {state && <p className='paragraph'>{state.overview}</p>}

            </section>
        </>
    )
}
