import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { increaseStarCount } from '../services/storage';

export default function FavouriteBtn({id}) {

    return (
        <button
            type='button'
            className='card__favourite-wrapper'
            onClick={() => increaseStarCount(id)}
        >
            <FontAwesomeIcon
                className='card__favourite'
                icon={faStar}
            />
        </button>
    )
}
