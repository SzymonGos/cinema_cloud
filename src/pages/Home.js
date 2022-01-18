import React from 'react';
import HeroBanner from '../components/HomePage/HeroBanner';
import MostPopular from '../components/HomePage/MostPopular';
import CompanyMission from '../components/HomePage/CompanyMission';
import useMoviesFetch from '../services/useMoviesFetch';

export default function Home() {

    const {state: {movies, heroBanner}} = useMoviesFetch();

    return (
        <>
            <HeroBanner heroBanner={heroBanner}/>
            <MostPopular movies={movies}/>   
            <CompanyMission />
        </>
    )
}
