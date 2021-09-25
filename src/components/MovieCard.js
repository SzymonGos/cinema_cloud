import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MovieCard({ title, styles }) {
    return (
        <div className='card' style={styles}>
            <div className="card__poster-img"></div>
            <div className="card__body">
                <h3 className="card__title">{title}</h3>
            </div>
        </div>
    )
}
