import { useState, useEffect } from "react";
import { POPULAR_MOVIES_URL } from "../config";

const useMoviesFetch = () => {
    const [state, setState] = useState({});

    const fetchMovies = async (endpoint) => {
        const page = endpoint.includes('page');
        try {
            const resp = await fetch(endpoint);
            const data = await resp.json();
            setState(prev => ({
                movies:
                page
                ? [...prev.movies, ...data.results]
                : [...data.results],
                heroBanner: data.results[0],
                currentPage: data.page,
            }));

        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect( () => {
        fetchMovies(POPULAR_MOVIES_URL);
    }, []);

    return { state, fetchMovies }
}

export default useMoviesFetch;