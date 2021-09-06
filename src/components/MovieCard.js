import React from 'react'

export default function MovieCard({title, styles}) {
    console.log(styles);
    return (
        <div className='card' style={styles}>
            <div className="card__poster-img"></div>
            <div className="card__body">
            <h3 className="card__title">{title}</h3>
                    <h3 className="card__title">The Best Movie Title In The World</h3>
            </div>
        </div>
    )
}
