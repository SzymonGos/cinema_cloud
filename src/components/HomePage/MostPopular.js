import React from 'react';
import MovieCard from '../MovieCard';
import Carousel from './Carousel';

export default function MostPopular() {
    return (
            <section className="popular-content">
                <div className="title-wrapper">
                    <h1 className="title">Most popular</h1>
                    <div className="underline"></div>
                </div>

                <Carousel />
                <div className='grid'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </section>
    )
}
