import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import defaultUser from '../assets/images/default-user.png';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import { useStore } from '../services/storage';
import PATH from '../services/paths';
import {
  query,
  where,
  onSnapshot
} from 'firebase/firestore';
import { userRef } from '../config/firebase-config';
import FavouriteMovieCard from '../components/FavouriteMovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


export default function UserPanel() {

  const store = useStore();
  const history = useHistory();
  const user = JSON.parse(JSON.stringify(store.state.storageUser));
  const [userData, setUserData] = useState(user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDangerModal = isModalOpen ? 'show' : 'hide';

  console.log(isModalOpen);

  const getRealTimeUserData = () => {
    const q = query(userRef, where("userId", "==", user.userId));

    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach(doc => {
        setUserData({ ...doc.data() })
      })
    })
  }

  const handleDeleteAccount = () => {
    setIsModalOpen(false);
    // store.reauthenticateUser();
    store.deleteAccount();
    
  }

  useEffect(() => {
    if (!user) return history.push(PATH.HOME);
    getRealTimeUserData();

    return () => {
      setUserData({});
    }
  }, [])

  return (
    <section className='user'>
      <header className="user__title-background">
        <div className="user__details">
          <span>
            <div className="user__img-wrapper">
              <img
                src={defaultUser}
                className='user__img'
                alt="user" />
            </div>
            <div className="user__title">
              <h2>{userData && userData.name}</h2>
            </div>
          </span>
        </div>
      </header>
      <main>
        <div className="title-wrapper">
          <h1 className="title">Your Favourite Movies</h1>
          <div className="underline"></div>
        </div>
        <div className='favourite-movies-list'>
          {user && userData.movies.length === 0
            ? <p>List is Empty</p>
            : user && userData.movies.map((movie, idx) => {
              return (
                <FavouriteMovieCard key={idx} favMovies={movie} />
              )
            })
          }
        </div>
      </main>
      <section className='danger'>
        <div className="danger__wrapper">
          <h2>Danger Zone</h2>
          <div className="danger__box">
            <button
              className='danger__btn'
              onClick={() => setIsModalOpen(true)}
            >Delete Account</button>
          </div>
        </div>
      </section>
      <div className={`danger-modal ${toggleDangerModal}`}>
        <div className="danger-modal__box">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className='danger-modal__alertCircle'
          />
          <h3>Are you sure you want to permanently delete your account?</h3>
          <span>
            <button
              className='danger-modal__btn'
              onClick={handleDeleteAccount}
            >
              Yes
            </button>
            <button
              className='danger-modal__btn'
              onClick={() => setIsModalOpen(false)}
            >
              No
            </button>
          </span>
        </div>
      </div>
    </section>
  )
}
