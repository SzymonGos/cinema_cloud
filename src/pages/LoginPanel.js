import React from 'react'
import { Link } from 'react-router-dom';
import loginBackground from '../assets/images/popcorn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useStore } from '../services/storage';
import { googleProvider } from '../config/firebase-config';
import PATH from '../services/paths';


export default function LoginPanel() {

  const store = useStore();

  return (
    <section
      style={{ backgroundImage: `url(${loginBackground})` }}
      className='login'
    >
      <div className="login__action">
        <h2 className="login__title">login & add favourite movies</h2>
        <div className="login__auth-wrapper">
          <ul>
            <li className="login__item">
              <form className="login__form">
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
                <button className='login__btn'>Login</button>
              </form>
            </li>
            <li className="login__item">
              <span>Don't have an account? <br /></span>
              <Link
                to={PATH.REGISTER}
                className="login__link"
              >Register here.</Link>
            </li>
            <li className="login__item">
              <span className='login__icon'><FontAwesomeIcon icon={faGoogle} /></span>
              <span
                className='login__btn-text'
                onClick={() => store.signInWithProvider(googleProvider)}
              >Login with Google</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
