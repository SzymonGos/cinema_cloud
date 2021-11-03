import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../services/storage';
import PATH from '../../services/paths';
import { Link } from 'react-router-dom';

export default function MenuMobile() {

  const store = useStore();
  const menu = store.state.isMenuOpen;

  const isMenuOpen = menu ? "menu__overlay-mobile" : "menu__overlay-mobile--hide";
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
          <li>Stars: {store.state.favouriteMovieIds.length}</li>
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
          <li>
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
          <li>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="mobile-menu__icon"
            />
            <Link
              className="mobile-menu__link"
              onClick={() => store.toggleMobileMenu(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="mobile-menu__icon"
            />
            <Link
              className="mobile-menu__link"
              onClick={() => store.toggleMobileMenu(false)}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
