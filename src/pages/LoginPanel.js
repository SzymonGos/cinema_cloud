import React from 'react'
import loginBackground from '../assets/images/popcorn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
export default function LoginPanel() {
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
              <span className='login__icon'><FontAwesomeIcon icon={faFacebook} /></span>
              <span className='login__btn-text'>Login with Facebook</span>
            </li>
            <li className="login__item">
              <span className='login__icon'><FontAwesomeIcon icon={faGoogle} /></span>
              <span className='login__btn-text'>Login with Google</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
