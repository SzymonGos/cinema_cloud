import React from 'react';
import HeroBanner from '../components/HomePage/HeroBanner';
import MostPopular from '../components/HomePage/MostPopular';
import CompanyMission from '../components/HomePage/CompanyMission';

export default function Home() {
    return (
        <>
            <HeroBanner />
            <MostPopular />   
            <CompanyMission />
        </>
    )
}
