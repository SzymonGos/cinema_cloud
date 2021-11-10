import React, { useState, useEffect } from 'react'
import defaultUser from '../assets/images/default-user.png';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';


export default function UserPanel() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(!isLoading), 1000)
  }, [])

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
