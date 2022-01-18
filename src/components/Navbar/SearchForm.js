import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import MovieCard from '../MovieCard';
import { useStore } from '../../services/storage';
import { SEARCH_URL, IMAGE_URL, POSTER_SIZE } from '../../config/config';
import useMoviesFetch from '../../services/useMoviesFetch';
import Spinner from '../Spinner';

const placeHolder = 'https://dummyimage.com/500x750/262626/f4c518.jpg&text=NO+PHOTO+AVAILABLE';

export default function SearchForm() {

    const { state: { movies, currentPage }, isLoading, fetchMovies } = useMoviesFetch();
    const store = useStore()
    const isModalOpen = store.state.isOpen;
    const [focused, setFocused] = useState(null);
    const [query, setQuery] = useState('');

    const isSearchModalOpen = isModalOpen ? "overlay" : "overlay hidden";
    const toggle = focused ? "form form--active" : "form form--inactive"
    const isInputActive = (focused == null) ? "form" : toggle;

    const handleChange = (e) => {
        setQuery(e.target.value.trimStart());
        if (query.length > 0) return fetchMovies(SEARCH_URL + query);
    }

    const loadMoreMovies = () => {
        const loadNextPageUrl = `${SEARCH_URL}${query}&page=${currentPage + 1}`;
        fetchMovies(loadNextPageUrl);
    }

    console.log(movies);

    return (
        <section className={`${isSearchModalOpen}`}>
            <div className="content">
                <form
                    autoComplete='off'
                    className={`${isInputActive}`}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder='Search'
                        className='form__input'
                        value={query}
                        onChange={handleChange}
                    />
                </form>
                <div
                    className='btn-close'
                    onClick={() => {
                        store.toggleSearchModal(false);
                        setFocused(null);
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                {isLoading && <Spinner />}
                {(query.length > 1) &&
                    <div className="movies__content" style={{ marginBottom: '4rem' }}>
                        {movies.length === 0
                            ? <div className='query-message'>
                                <h2>No Movies Found.</h2>
                            </div>
                            : <div className="grid">
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
                        {movies.length >= 20 && <div className='btn-wrapper'>
                            <button className='button--load-more' type='submit' onClick={loadMoreMovies}>
                                <h5>Load More</h5>
                            </button>
                        </div>}
                    </div>
                }
            </div>
        </section>
    )
}