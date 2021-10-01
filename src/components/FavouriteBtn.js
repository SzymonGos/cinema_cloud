import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../services/storage';

export default function FavouriteBtn({id}) {
    const store = useStore();

    let isActive = store.state.favouriteMovieIds.includes(id); 

    return (
        <button
            type='button'
            className='card__favourite-wrapper'
            onClick={() => store.toggleFavouriteMovieId(id)}
        >
            <FontAwesomeIcon
                className={`card__favourite ${isActive? 'card__favourite--active': ''}`}
                icon={faStar}
            />
        </button>
    )
}
