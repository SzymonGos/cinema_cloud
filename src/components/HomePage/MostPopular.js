import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import MovieCard from '../MovieCard';
import { IMAGE_URL, POSTER_SIZE }  from '../../config/config';

export default function MostPopular({ movies }) {

    const [offset, setOffset] = useState(window.innerWidth);

    const checkSize = () => {
        setOffset(window.innerWidth);
    };

    useEffect(() => {

        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, []);

    console.log(offset);

    return (
        <section className="popular-content">
            <div className="title-wrapper">
                <h1 className="title">Most popular</h1>
                <div className="underline"></div>
            </div>
            {offset < 450
                ? movies && movies.slice(0, 10).map((movie, index) =>
                    <MovieCard
                        key={index}
                        title={movie.title}
                        id={movie.id}
                        image={`${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`}
                        styles={{ 'margin': '2rem 0' }}
                    />
                )

                : <Carousel movies={movies} />
            }
        </section>
    )
}
