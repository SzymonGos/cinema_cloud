import React, { useState, useEffect } from 'react'
import defaultUser from '../assets/images/default-user.png';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import { onSnapshot } from '@firebase/firestore';
import { db, favColectionRef } from '../config/firebase-config';


export default function UserPanel() {

  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getFavouritesMoviesList = () => {
    onSnapshot(favColectionRef, snapshot => {
      setFavouriteMovies(snapshot.docs.map(doc => doc.data()))
    })
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(!isLoading), 1000)
    getFavouritesMoviesList();
  }, [])

  console.log(favouriteMovies);

  return (
    <section className='user'>
      <header className="user__title-background">
        <div className="user__details">
          {isLoading
            ? <Spinner />
            : <span>
              <div className="user__img-wrapper">
                <img
                  src={defaultUser}
                  className='user__img'
                  alt="user" />
              </div>
              <div className="user__title">
                <h2>Your Name</h2>
              </div>
            </span>
          }
        </div>
      </header>
      <main>
        <div className="title-wrapper">
          <h1 className="title">Your Favourite Movies</h1>
          <div className="underline"></div>
        </div>
        {/* {isLoading
        ? <Spinner/>
        : <>
            {favouriteMovies && favouriteMovies.map(({ movies }, idx) => {
              return <div key={idx}>
                {movies.map((item, index) => {
                  return <p key={index}>Signle movie ID: {item}</p>
                })}
              </div>
            })}
          </>
        } */}
      </main>
      <section className='danger'>
        <div className="danger__wrapper">
          <h2>Danger Zone</h2>
          <div className="danger__box">
            <button className='danger__btn'>Delete Account</button>
          </div>
        </div>
      </section>
    </section>
  )
}
