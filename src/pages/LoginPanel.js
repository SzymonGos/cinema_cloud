import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import loginBackground from '../assets/images/popcorn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useStore } from '../services/storage';
import { googleProvider } from '../config/firebase-config';
import PATH from '../services/paths';

export default function LoginPanel() {

  const store = useStore();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPasswod] = useState('');
  const user = store.state.storageUser;

  const handleLogin = (e) => {
    e.preventDefault();
    store.signInUser(email, password);
  };

  useEffect(() => {
    if (user) {
      setEmail("");
      setPasswod("");
      history.push(PATH.USER_PANEL);
    }
  }, [user]);

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
              <form
                className="login__form"
                onSubmit={handleLogin}
              >
                <input
                  className="login__input"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                <input
                  className="login__input"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPasswod(e.target.value)}
                  required />
                <p className='login__alert'>{store.errorState.errMessage}</p>
                <button
                  className='login__btn'
                  type='submit'
                >
                  Login
                </button>
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