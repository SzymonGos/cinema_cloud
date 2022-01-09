import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import loginBackground from '../assets/images/popcorn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useStore } from '../services/storage';
import { googleProvider } from '../config/firebase-config';
import PATH from '../services/paths';

export default function Register() {

  const store = useStore();
  const history = useHistory();
  const user = store.state.storageUser;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasswod] = useState('');

  const registerNewUser = (e) => {
    e.preventDefault();
    store.registerNewUser(name, email, password);
  }

  useEffect(() => {
    if (user) return history.push(PATH.USER_PANEL);
  }, [user]);

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
              <form
                className="login__form"
                onSubmit={registerNewUser}
              >
                <input
                  className="login__input"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value.trimStart())}
                  required />
                <input
                  className="login__input"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trimStart())}
                  required />
                <input
                  className="login__input"
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPasswod(e.target.value)}
                  required />
                <p className='login__alert'>{store.errorState.errMessage}</p>
                <button
                  className='login__btn'
                  type='submit'
                >
                  Create your CINEMACLOUD account</button>
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
