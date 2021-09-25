import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function MovieCard({ title, styles, index }) {
    return (
        <div className='card' style={styles}>
            <button 
                type='button'
                onClick={() => console.log(index+1)}
                >
                <FontAwesomeIcon
                    className='card__favourite'
                    icon={faStar}
                />
            </button>
            <div className="card__poster-img"></div>
            <div className="card__body">
                <h3 className="card__title">{title}</h3>
            </div>
        </div>
    )
}
