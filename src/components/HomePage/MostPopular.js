import React from 'react';
import Carousel from './Carousel';

export default function MostPopular({movies}) {
    return (
            <section className="popular-content">
                <div className="title-wrapper">
                    <h1 className="title">Most popular</h1>
                    <div className="underline"></div>
                </div>

                <Carousel movies={movies}/>
            </section>
    )
}
