import React from 'react';
import { Link } from 'react-router-dom';
import FavouriteBtn from './FavouriteBtn';
import { useStore } from '../services/storage';

export default function MovieCard({ id, title, name, image, styles }) {

    const store = useStore()

    return (
        <div className='card' style={styles}>
            <FavouriteBtn id={id}/>
            <Link
                className='card__link'
                to={`/${id}`}
                key={id}
                onClick={() => store.toggleSearchModal(false)}
            >
                <div className="card__poster-img" style={
                    image && {backgroundImage: `url(${image})`}
                }></div>
                <div className="card__body">
                    <h3 className="card__title">{title}</h3>
                </div>
            </Link>
        </div>
    )
}
