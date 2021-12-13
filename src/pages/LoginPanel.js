import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import loginBackground from '../assets/images/popcorn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useStore } from '../services/storage';
import { auth, googleProvider } from '../config/firebase-config';
import PATH from '../services/paths';
import { useAuthState } from "react-firebase-hooks/auth";



export default function LoginPanel() {

  const store = useStore();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPasswod] = useState('');
  const [user, loading, error] = useAuthState(auth);


  useEffect(() => {
    if (loading) {
      console.log('loading');
      return;
    }
    if (user) {
      console.log(user);
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
              <div
                className="login__form">
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
                <button
                  className='login__btn'
                  onClick={() => store.signInUser(email, password)}
                >Login</button>
              </div>
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
