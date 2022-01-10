import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { useStore } from '../../services/storage';
import PATH from '../../services/paths';
import { Link, useHistory } from 'react-router-dom';

export default function MenuMobile() {

  const store = useStore();
  const history = useHistory();
  const menu = store.state.isMenuOpen;
  const user = store.state.storageUser;

  const isMenuOpen = menu ? "menu__overlay-mobile" : "menu__overlay-mobile--hide";

  useEffect(() => {    
    if (!user) return history.push(PATH.HOME);
}, [user])

  return (
    <section className={`${isMenuOpen}`}>
      <div className="btn-close">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => store.toggleMobileMenu(false)}
        />
      </div>
      <div className="menu-wrapper">
        <ul className="mobile-menu">
          {user && <h3 className='mobile-menu__stars'>Stars: {store.state.favouriteMovieIds.length}</h3>}
          <li>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="mobile-menu__icon"
            />
            <Link
              to={PATH.HOME}
              className="mobile-menu__link"
              onClick={() => store.toggleMobileMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="mobile-menu__icon"
            />
            <Link
              to={PATH.MOVIES}
              className="mobile-menu__link"
              onClick={() => store.toggleMobileMenu(false)}
            >
              Movies
            </Link>
          </li>
          {user
            ? <>
              <li>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="mobile-menu__icon"
                />
                <Link
                  to={PATH.USER_PANEL}
                  className="mobile-menu__link"
                  onClick={() => store.toggleMobileMenu(false)}
                >
                  My Profile
                </Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="mobile-menu__icon"
                />
                <span                  
                  className="mobile-menu__link"
                  onClick={() => {
                    store.logout();
                    store.toggleMobileMenu(false);
                  }}
                >
                  Logout
                </span>
              </li>
            </>
            : <li>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="mobile-menu__icon"
              />
              <Link
                to={PATH.LOGIN_PANEL}
                className="mobile-menu__link"
                onClick={() => store.toggleMobileMenu(false)}
              >
                Login
              </Link>
            </li>
          }
        </ul>

        <div className='mobile-menu__socials'>
        <span></span>
          <ul>
            <li><FontAwesomeIcon 
              icon={faFacebookSquare}
            /></li>
            <li><FontAwesomeIcon 
              icon={faTwitterSquare}
            /></li>
            <li><FontAwesomeIcon 
              icon={faInstagramSquare}
            /></li>
          </ul>
        </div>
      </div>
    </section>
  )
}