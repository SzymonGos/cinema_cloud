import React from 'react';
import MovieCard from '../MovieCard';

export default function MostPopular() {
    return (
            <section className="popular-content">
                <div className="title-wrapper">
                    <h1 className="title">Most popular</h1>
                    <div className="underline"></div>
                </div>
                <div className='grid'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </section>
    )
}
