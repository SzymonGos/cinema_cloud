import React from 'react'
import MovieCard from '../components/MovieCard';
import MoviesBanner from '../components/MoviesBanner';
import { IMAGE_URL, POPULAR_MOVIES_URL, POSTER_SIZE } from '../config';
import useMoviesFetch from '../services/useMoviesFetch';

export default function Movies() {

    const { state: { movies , currentPage }, fetchMovies } = useMoviesFetch();

    const loadMoreMovies = () => {
        const loadNextPageUrl = `${POPULAR_MOVIES_URL}&page=${currentPage + 1}`
        fetchMovies(loadNextPageUrl);
    }

    return (
        <>
            <MoviesBanner />
            <section className='movies'>
                <div className="movies__content">
                    {movies && <div className="grid">
                    {movies.map((movie, index) =>
                        <MovieCard
                            key={index}
                            title={movie.title}
                            id={movie.id}
                            image={`${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`}
                        />
                        )}
                    </div>
                    }
                    <div className='btn-wrapper'>
                        <button className='button--load-more' type='submit' onClick={loadMoreMovies}>
                            <h5>Load More</h5>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
