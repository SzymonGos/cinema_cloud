import React from 'react';
import useSingleMovieFetch from '../services/useSingleMovieFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../services/storage';
import { IMAGE_URL, POSTER_SIZE } from '../config/config';

const placeHolder = 'https://dummyimage.com/500x750/262626/f4c518.jpg&text=NO+PHOTO+AVAILABLE';

export default function FavouriteMovieCard({ favMovies }) {

  const { state } = useSingleMovieFetch(favMovies);
  const store = useStore();
  const movieReleasedDate = state.release_date

  return (
    <div className='favourite'>
      <ul className='favourite__ul'>
        <li>
          <img
            src={
              state.poster_path
                ? `${IMAGE_URL}${POSTER_SIZE}${state.poster_path}`
                : placeHolder
            }
            alt="movie_poster"
            className='favourite__poster'
          />
        </li>
        <li>
          <div className='favourite__title'>
            <h4>
              {state.title}
            </h4><br />
            <span className='favourite__movie-release-date'>Released: {movieReleasedDate && movieReleasedDate.substring(0,4)}</span>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            className='favourite__deleteBtn'
            icon={faTrashAlt}
            onClick={() => store.toggleFavouriteMovieId(state.id)}
          />
        </li>
      </ul>
    </div>
  )
}
