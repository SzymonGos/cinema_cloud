import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import { IMAGE_URL, POPULAR_MOVIES_URL, POSTER_SIZE } from '../config/config';
import useMoviesFetch from '../services/useMoviesFetch';

const placeHolder = 'https://dummyimage.com/500x750/262626/f4c518.jpg&text=NO+PHOTO+AVAILABLE';

export default function Movies() {

    const { state: { movies, currentPage }, isLoading, fetchMovies } = useMoviesFetch();

    const loadMoreMovies = () => {
        const loadNextPageUrl = `${POPULAR_MOVIES_URL}&page=${currentPage + 1}`
        fetchMovies(loadNextPageUrl);
    }
    
    return (
        <>
            <div className="movies-background"></div>
            {isLoading && <Spinner />}
            <div className="title-wrapper">
                <h1 className="title">Browse Movies</h1>
                <div className="underline"></div>
            </div>
            <section className='movies'>
                <div className="movies__content">
                    {movies && <div className="grid">
                        {movies.map((movie, index) =>
                            <MovieCard
                                key={index}
                                title={movie.title}
                                id={movie.id}
                                image={
                                    movie.poster_path
                                        ? `${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
                                        : placeHolder
                                }
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
