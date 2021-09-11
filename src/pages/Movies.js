import React from 'react'
import MovieCard from '../components/MovieCard';
import MoviesBanner from '../components/MoviesBanner';
import { v4 as uuidv4 } from 'uuid';

const movies = [
    {
        title: 'Movie 1'
    },
    {
        title: 'Movie 2'
    },
    {
        title: 'Movie 3'
    },
    {
        title: 'Movie 4'
    },
    {
        title: 'Movie 5'
    },
    {
        title: 'Movie 6'
    },
    {
        title: 'Movie 7'
    },
    {
        title: 'Movie 8'
    },
    {
        title: 'Movie 9'
    },
    {
        title: 'Movie 10'
    }
];


export default function Movies() {
    return (
        <>
            <MoviesBanner />
            <section className='movies'>
                <div className="movies__content">
                    <div className="grid">
                        {movies.map((movie) => <MovieCard key={uuidv4()}
                            {...movie}
                        // styles={{ 'margin': '2rem 0' }}
                        />)}
                    </div>
                </div>
            </section>
        </>
    )
}
