import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import loginBackground from '../assets/images/popcorn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useStore } from '../services/storage';
import { auth, googleProvider } from '../config/firebase-config';
import { useAuthState } from "react-firebase-hooks/auth";
import PATH from '../services/paths';

export default function Register() {
  
  const store = useStore();
  const history = useHistory();
  const [user] = useAuthState(auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasswod] = useState('');

  const register = () => {
    if(!name && !email && !password) return alert('Fill up details');
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
              <div className="login__form">
                <input
                  className="login__input"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required />
                <input
                  className="login__input"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                <input
                  className="login__input"
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPasswod(e.target.value)}
                  required />
                <button 
                className='login__btn'
                onClick={register}
                >
                Create your CINEMACLOUD account</button>
              </div>
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
