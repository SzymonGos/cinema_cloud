import React from 'react'
import loginBackground from '../assets/images/popcorn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useStore } from '../services/storage';
import { googleProvider } from '../config/firebase-config';


export default function Register() {

  const store = useStore();

  return (
    <section
      style={{ backgroundImage: `url(${loginBackground})` }}
      className='login'
    >
      <div className="login__action">
        <h2 className="login__title">Create account</h2>
        <div className="login__auth-wrapper">
          <ul>
            <li className="login__item">
              <form className="login__form">
                <input
                  className="login__input"
                  type="text"
                  placeholder="Your Name"
                  required />
                <input
                  className="login__input"
                  type="email"
                  placeholder="email"
                  required />
                <input
                  className="login__input"
                  type="password"
                  placeholder="password"
                  required />
                <button className='login__btn'>Create your CINEMACLOUD account</button>
              </form>
            </li>
            <li className="login__item">
            <p className="login__text">OR</p>
            </li>
            <li className="login__item">
              <span className='login__icon'><FontAwesomeIcon icon={faGoogle} /></span>
              <span
                className='login__btn-text'
                onClick={() => store.signInWithProvider(googleProvider)}
              >Sign Up with Google</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
