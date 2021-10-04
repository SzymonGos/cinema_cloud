import React from 'react';
import HeroBanner from '../components/HomePage/HeroBanner';
import MostPopular from '../components/HomePage/MostPopular';
import CompanyMission from '../components/HomePage/CompanyMission';
import { POPULAR_MOVIES_URL } from '../config';
import useMoviesFetch from '../services/useMoviesFetch';


export default function Home() {

    const {state: {movies, heroBanner}} = useMoviesFetch(POPULAR_MOVIES_URL);

    return (
        <>
            <HeroBanner heroBanner={heroBanner}/>
            <MostPopular cardMovies={movies}/>   
            <CompanyMission />
        </>
    )
}
