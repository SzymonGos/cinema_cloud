import React from 'react'
import MovieCard from '../components/MovieCard';
import MoviesBanner from '../components/MoviesBanner';
import movies from '../services/mockMoviesData';

export default function Movies() {
    return (
        <>
            <MoviesBanner />
            <section className='movies'>
                <div className="movies__content">
                    <div className="grid">
                        {movies.map((movie, index) =>
                            <MovieCard
                                key={index}
                                {...movie}
                            />)}
                    </div>
                </div>
            </section>
        </>
    )
}
